# AI Text Summarizer  

## Overview  
The **AI Text Summarizer** is a web-based application that utilizes Facebook's BART Large CNN transformer model via the Hugging Face API to generate concise summaries of lengthy documents and articles. Built with a Node.js + Express.js backend and a clean, responsive frontend, the tool helps users efficiently extract key insights without reading the full content.

With this tool, you can:  
✅ **Summarize lengthy texts instantly**  
✅ **Retain key information and essential points**  
✅ **Enhance productivity for researchers, students, and professionals**  
✅ **Save time by avoiding the need to read entire documents**  

## Features  
- **AI-Powered Summarization** : Leverages the BART Large CNN model through Hugging Face to provide high-quality summaries.
- **Instant Results** : Submit text and receive a concise summary in real time.
- **Clean User Interface** : Minimalistic UI built using HTML, CSS, and JavaScript.
- **Efficient Text Handling** : Optimized for summarizing reports, blogs, news articles, research papers, and more.

## Technologies Used  
- **Backend**: Node.js, Express.js
- **AI Model**: Facebook’s **BART Large CNN (via Hugging Face)**  
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Vercel (Frontend), Hugging Face API (Text Processing)
  
## Installation  

### Prerequisites  
- Node.js and npm installed  

### Steps  
1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/garimabhayanaa/AI-Text-Summarizer
   cd AI-Text-Summarizer
2. **Install Dependencies:**
   ```bash
    npm install
3. **Add Your Hugging Face API Key**
   Create a .env file in the root directory:
    ```bash
    HUGGINGFACE_API_KEY=your_api_key_here
4. **Start the Server:**
    node app.js
5. **Access the Application:**
   Open your browser and navigate to:
      http://localhost:3000

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
