import setuptools

setuptools.setup(
    name="streamlit_select_image",
    version="0.0.1",
    author="victorC97",
    author_email="victor.cour@telecomnancy.net",
    description="Simple Streamlit MUI Select with images.",
    long_description="Adaptation of the MUI Select component but instead of plain text MuiItems, it's images.",
    long_description_content_type="text/plain",
    url="https://github.com/victorC97/streamlit_select_image",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.6",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
)
