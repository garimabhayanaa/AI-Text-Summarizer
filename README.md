# AI Text Summarizer  

## Overview  
The **AI Text Summarizer** is an intelligent application that leverages **Facebook's BART Large CNN model**, accessed via **Hugging Face**, to condense **long articles, reports, and documents** into **concise summaries**.  

With this tool, you can:  
✅ **Summarize lengthy texts instantly**  
✅ **Retain key information and essential points**  
✅ **Enhance productivity for researchers, students, and professionals**  
✅ **Save time by avoiding the need to read entire documents**  

## Features  
- **AI-Powered Summarization**: Uses **BART Large CNN** to generate **high-quality summaries**.  
- **Customizable Summary Length**: Adjust the **summary size** based on your preference.  
- **User-Friendly Interface**: Enter text, click summarize, and get results instantly.  
- **Supports Various Text Formats**: Works with **articles, reports, research papers, and more**.  

## Technologies Used  
- **Backend**: Python (Flask)  
- **AI Model**: Facebook’s **BART Large CNN (via Hugging Face)**  
- **Frontend**: Streamlit (for a simple and interactive UI)  
- **Deployment**: Hugging Face API for text processing  

## Installation  

### Prerequisites  
- **Python 3.7+** installed  

### Steps  
1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/garimabhayanaa/AI-Text-Summarizer
   cd AI-Text-Summarizer
2. **Install Dependencies:**
   ```bash
    pip install -r requirements.txt
3. **Run the Application:**
    ```bash
    python app.py
4. **Access the Application:**
    Open your browser and visit http://localhost:8501 to use the summarizer.

## Usage
1. Input a long article, document, or report.
2. Click ‘Summarize’ to generate a concise summary.
3. Adjust summary length if needed.
4. Copy the output for quick reference.

## Future Enhancements
- Multi-Language Support
- Summarization of PDF & Web URLs
- Mobile-Friendly UI

## License
This project is licensed under the MIT License.

## Acknowledgments
This project utilizes Facebook’s BART model, made available through Hugging Face, to provide efficient and high-quality text summarization.
