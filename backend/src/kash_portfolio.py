# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# import requests
# import re

# app = FastAPI()

# # Allow frontend to talk to this API
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Optional: load knowledge file once at startup
# with open("kaushik_knowledge.txt", "r") as f:
#     raw_knowledge = f.read()
#     full_knowledge = ' '.join(raw_knowledge.split())  # trim whitespace

# OLLAMA_URL = "http://localhost:11434/api/generate"
# OLLAMA_MODEL = "gemma:2b-instruct-q4_K_M"  # lighter, faster version

# @app.post("/chat")
# async def chat(request: Request):
#     try:
#         data = await request.json()
#         user_input = data.get("query", "")
#         print(f"Received user input: {user_input}")

#         # Build the prompt
#         prompt = (
#             "You are an AI assistant helping answer questions about Kaushik Kolla. "
#             "Below is Kaushik's detailed professional background, including his work experience, "
#             "education, and technical skills. Use ALL of this information to answer questions "
#             "accurately and completely. If the information is present in the background, use it "
#             "to provide specific details and examples.\n\n"
#             f"Background Information:\n{full_knowledge}\n\n"
#             f"Question: {user_input}\n"
#             "Answer: Provide a complete answer using the specific information from the background provided above. "
#             "If the information is mentioned in the background, include those details in your response."
#         )

#         payload = {
#             "model": OLLAMA_MODEL,
#             "prompt": prompt,
#             "stream": False,
#             "options": {
#                 "temperature": 0.3,
#                 "top_p": 0.9,
#                 "top_k": 40,
#                 "num_predict": 150  # adjust based on how long you want the answers to be
#             }
#         }

#         res = requests.post(OLLAMA_URL, json=payload)
#         res.raise_for_status()
#         response_text = strip_ansi_codes(res.json().get("response", "")).strip()

#         if not response_text:
#             return {"response": "Error: Empty response from model"}

#         return {"response": response_text}

#     except requests.exceptions.RequestException as e:
#         print(f"Error with Ollama request: {str(e)}")
#         return {"response": "Error communicating with Ollama API"}

#     except Exception as e:
#         print(f"Server error: {str(e)}")
#         return {"response": f"Error: {str(e)}"}


# def strip_ansi_codes(text):
#     ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
#     return ansi_escape.sub('', text)
