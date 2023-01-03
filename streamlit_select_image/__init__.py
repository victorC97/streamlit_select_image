import os.path
import streamlit.components.v1 as components
import base64
import streamlit as st

_RELEASE = True

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _select_image = components.declare_component(
        "streamlit_select_image",
        path=build_dir
    )
else:
    _select_image = components.declare_component(
        "streamlit_select_image",
        url="http://localhost:3001"
    )


def st_select_image(options, label="", no_choice=False, key=None):
    images = []
    for option in options:
        with open(option, 'rb') as file:
            enc = base64.b64encode(file.read()).decode()
            images.append(f"data:image/png;base64, {enc}")
    image = _select_image(label=label, options=options, images=images, no_choice=no_choice, default=options[0], key=key)
    return image
