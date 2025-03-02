from flask import Flask, request, jsonify
import asyncio
import subprocess
import json
import re

def extract_json(text):
    matches = re.findall(r"```(?:json)?\n(.*?)\n```", text, re.DOTALL)
    return matches[0] if matches else None

app = Flask(__name__)

async def run_ollama(prompt):
    process = await asyncio.create_subprocess_exec(
        'ollama', 'run', 'llama3.2:1b', prompt,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    stdout, stderr = await process.communicate()
    return stdout.decode().strip()

@app.route('/generate', methods=['POST'])
async def generate_text():
    prompt = request.json.get('prompt', '')

    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    try:
        response = await run_ollama(prompt)
        print(response)
        res = extract_json(response)
    
        return res
    
    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)