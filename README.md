# Streamlit MUI Select with images

## Setup

Clone project or pip install the package :

```pip install streamlit_select_image```

## Example

I needed a MUI Select with images in Streamlit for a side project, it might be useful for somebody else ! 

You can pass path to files in a list, the component is basically a MUI Select with images MenuItems components. 

You get the path of the file selected in the session state. I suggest you use key management on this component even if toutput value of the component is working as well.

```
from streamlit_select_image import st_select_image
import streamlit as st

st.title("Streamlit_select_image component")
columns = st.columns(5)
for i in range(5):
    with columns[i]:
        st_select_image(options=["elephant-1598359_1280.png", "parrot-1417286_1280.png", "penguin-158551_1280.png", "pig-3245668_1280.png", "seal-161264_1280.png"], label=f"Image", key=f"si{i}")
st.write("Session State :")
st.write(st.session_state)
```
As I'm currently working with local png files, I didn't really bother with permeability with svg files, already-bytes images, etc... If you need it, I'll consider to update the project. Otherwise, I don't really know if I'll update this component myself.

It might be some irregularity (I'm not really front end developer unfortunately). You can open issues and PR if you want.

## Render

<img width="724" alt="Capture d’écran 2023-01-03 à 00 34 26" src="https://user-images.githubusercontent.com/75739506/210276047-86820992-f1e6-4832-8367-81ef7b3ce1df.png">
