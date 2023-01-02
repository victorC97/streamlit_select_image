#!/usr/bin/env python # -*- coding: utf-8 -*-

from streamlit_select_image import st_select_image
import streamlit as st

st.title("Streamlit_select_image component")
columns = st.columns(5)
for i in range(5):
    with columns[i]:
        st_select_image(options=["elephant-1598359_1280.png", "parrot-1417286_1280.png", "penguin-158551_1280.png", "pig-3245668_1280.png", "seal-161264_1280.png"], label=f"Image", key=f"si{i}")
st.write("Session State :")
st.write(st.session_state)
