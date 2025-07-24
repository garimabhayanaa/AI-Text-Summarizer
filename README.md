# SynthText  

## Overview  
SynthText is an AI-powered web app designed to make your text work smarter. Whether you want to summarize, paraphrase, expand, or formalize your content, SynthText leverages powerful transformer models to give you intelligent, tone-aware outputs instantly.
Built with a Node.js + Express.js backend and a clean, responsive HTML/CSS/JavaScript frontend, SynthText delivers a seamless experience for students, professionals, writers, and anyone who works with words.

With this tool, you can:  
✅ **Summarize long paragraphs in seconds**  
✅ **Rephrase or expand text effortlessly**  
✅ **Choose tones like formal, casual, or neutral**  
✅ **Boost productivity and clarity in your writing**  
✅ **Save time on editing, researching, and rewriting**  

## Features  
- **Multi-Task AI Support**: Choose from summarize, paraphrase, expand, and more
- **Tone-Aware Responses**: Output adapts based on tone (e.g., formal, casual)
- **Instant Feedback**: Real-time text transformation via backend APIs
- **Minimalist UI**: Clean and responsive interface for distraction-free productivity
- **Versatile Text Handling**: Ideal for articles, reports, blogs, essays, and business writing

## Technologies Used  
- **Backend**: Node.js, Express.js
- **AI Model**: Facebook’s **BART Large CNN (via Hugging Face)**  
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Vercel (Frontend), Render (Backend)
  
## Installation  

### Prerequisites  
- Node.js and npm installed
- HuggingFace Access Token

### Steps  
1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/garimabhayanaa/SynthText
   cd SynthText
2. **Install Dependencies:**
   ```bash
    npm install
3. **Add Your Hugging Face API Key**
   Create a .env file in the root directory:
    ```bash
    ACCESS_TOKEN=your_access_token_here
4. **Start the Server:**
    node index.js
5. **Access the Application:**
   Open your browser and navigate to:
      http://localhost:3000

## Usage
1. Input or paste your text into the provided field
2. Select the task (Summarize / Paraphrase)
3. Choose your desired tone (Formal / Casual / Standard / etc.)
4. Click "Go" and view the AI-generated output
5. Copy or use the result as needed

## Future Enhancements
- Upload PDF and summarize/extract text
- Summarize web URLs
- Support for multiple languages
- Fully mobile-optimized interface

## License
This project is licensed under the MIT License.

## Acknowledgments
This project utilizes Facebook’s BART model, made available through Hugging Face, to provide efficient and high-quality text summarization.
