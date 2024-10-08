from typing import Any, Union

import requests

from core.tools.entities.tool_entities import ToolInvokeMessage
from core.tools.tool.builtin_tool import BuiltinTool

SDURL = {
    "sd_3": "https://api.siliconflow.cn/v1/stabilityai/stable-diffusion-3-medium/text-to-image",
    "sd_xl": "https://api.siliconflow.cn/v1/stabilityai/stable-diffusion-xl-base-1.0/text-to-image",
}


class StableDiffusionTool(BuiltinTool):
    def _invoke(
        self, user_id: str, tool_parameters: dict[str, Any]
    ) -> Union[ToolInvokeMessage, list[ToolInvokeMessage]]:
        headers = {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": f"Bearer {self.runtime.credentials['siliconFlow_api_key']}",
        }

        model = tool_parameters.get("model", "sd_3")
        url = SDURL.get(model)

        payload = {
            "prompt": tool_parameters.get("prompt"),
            "negative_prompt": tool_parameters.get("negative_prompt", ""),
            "image_size": tool_parameters.get("image_size", "1024x1024"),
            "batch_size": tool_parameters.get("batch_size", 1),
            "seed": tool_parameters.get("seed"),
            "guidance_scale": tool_parameters.get("guidance_scale", 7.5),
            "num_inference_steps": tool_parameters.get("num_inference_steps", 20),
        }

        response = requests.post(url, json=payload, headers=headers)
        if response.status_code != 200:
            return self.create_text_message(f"Got Error Response:{response.text}")

        res = response.json()
        result = [self.create_json_message(res)]
        for image in res.get("images", []):
            result.append(self.create_image_message(image=image.get("url"), save_as=self.VariableKey.IMAGE.value))
        return result
