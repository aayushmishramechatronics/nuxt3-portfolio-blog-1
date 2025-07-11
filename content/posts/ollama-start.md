---
title: Run Qwen 3 LLM Locally with Ollama: A Step-by-Step Guide
description: Deploying Qwen 3 Locally with Ollama CLI.
publishDate: July 11, 2025
date: 2025-07-11
img: "/img/cover/ollama.svg"
tags: ["blog"]
---

## Why use Qwen 3 LLM with Ollama?

the reason I'm recommending to use **Qwen 3 LLM (with 1.7B Parameter)** is purely because of its light-weight and efficient performance - basically it's pretty fast and compatible with almost all laptops having limited RAM (we're talking 8GB or less here).

It Supports 
- **Natural Language Understanding**
- **Code Generation**
- **Summarization and Reasoning**

plus many more stuffs — and all this while being quite resource-friendly, and when paired with **Ollama**, a CLI-based LLM runtime, your experience becomes quite smooth: you can pull models, run, and customize them in just a few lines.

---

## Getting Started: Installing Ollama

okay, so we have two different ways to install Ollama here, and just like any other newbie developer - I'll discuss the relatively more easer way to install Ollama so that you don't have to bang your head over it.

### 1. Installing Ollama for your OS
 Download and Install Ollama for your OS (Windows, macOS, or Linux) using the below mentioned link
> download Ollama from here - [https://ollama.com/download](https://ollama.com/download)

now after you've downloaded Ollama, you might as well want to check if it's properly installed in your laptop or not - and to do this all you have to do is:

* **run the below given command in your Windows Powershell (or Terminal)**, it should look somewhat like this:
    ```
    PS C:\Users\aayus> ollama --version
    ```
* **this command will give you the details of the latest version of Ollama**, which you have installed in your PC - it should look somewhat like this:
    ```
    PS C:\Users\aayus> ollama --version
    ollama version is 0.9.2
    ```
* **if you've completed the above 2 steps then you've successfully installed Ollama CLI on your PC**, so now after installing the Ollama CLI - you would want to run AI models locally.
* **and to run AI models locally - you'll again have to input some basic commands in your Terminal**, which we'll discuss about further in this blog (don't run away pal - stay with me)

### 2. Best use case of various different AI-Models

| Use Case              | Recommended Model      |
|-----------------------|------------------------|
| General-Purpose Chat  | **Gemma 2B**           |
| Logic & Math Tasks    | **Phi-2** or **Qwen 3**|
| Lightweight Coding    | **DeepSeek 1.5B**      |
| Minimal RAM Setups    | **TinyLlama**          |

---

## Installing + Running AI-Models using Ollama CLI

In this section we'll see how to install and run AI models locally using Ollama CLI, now if you have a PC with 8GB RAM or less then worry not - we'll be using models with fewer billion parameters.

Basically what I mean is - **the lower the parameter count, the more efficiently your PC will perform** — so that means you'll still be able to perform tasks like chat, code generation, reasoning, and summarization completely offline and quite efficiently/smoothly. 

For this blog, as already mentioned in the title - we'll be installing and running Qwen 3 LLM (with 1.7B Parameter) locally using our already installed Ollama CLI

### 1. Best Lightweight AI Models to Run Locally

| Model               | Size (Disk) | RAM Needed (estimated) | Strengths                              
|---------------------|-------------|-------------------|-----------------------------------------
| **Gemma 2B**        | ~2.5 GB     | ~4–5 GB           | balanced chat, language tasks          
| **Phi-2**           | ~1.6 GB     | ~2–3 GB           | code, math, reasoning (very compact)   
| **Qwen 3 (1.7B)**   | ~1.4 GB     | ~2–3 GB           | strong reasoning, and `/think` mode support 
| **DeepSeek-R1 (1.5B)** | ~1.1 GB     | ~2–2.5 GB         | lightweight code + logic model         
| **TinyLlama**       | ~637 MB     | ~1 GB             | extremely light, basic LLM usage       

### 2. Installing Qwen 3 LLM Locally using Ollama CLI:

below is the step-by-step command to input in your Terminal to install an AI-Model (Qwen 3 in our case):

- Ollama has a library consisting of various AI-Models, and what we would want to do is to _'pull'_ (or download) these models directly from the library onto our system using the Terminal and via the Ollama CLI. 
- To install Qwen 3 LLM Locally, we need to input the following command in our Windows Powershell (or Terminal):
    ```
    PS C:\Users\aayus> ollama pull qwen3:1.7b
    ```
- what this does is it'll **_'pull'_ the Qwen 3 LLM (with 1.7 billion parameters) from Ollama’s Model Library** and begin installing it directly on your system for local use.
- after inputting the above command, you should see somewhat like this:
    ```
    PS C:\Users\aayus> ollama pull qwen3:1.7b
    pulling manifest
    pulling 3d0b790534fe: 100% ▕███████████████████████████████████████████▏ 1.4 GB
    pulling ae370d884f10: 100% ▕███████████████████████████████████████████▏ 1.7 KB
    pulling d18a5cc71b84: 100% ▕███████████████████████████████████████████▏  11 KB
    pulling cff3f395ef37: 100% ▕███████████████████████████████████████████▏  120 B
    pulling 517ccaff02fe: 100% ▕███████████████████████████████████████████▏  487 B
    verifying sha256 digest
    writing manifest
    success
    ```

### 3. Running Qwen 3 LLM Locally using Ollama CLI:

- after successfully installing Qwen 3 LLM locally on your system, you would now want to run it as well - so to do that you'll have to input the following command in your Terminal:

    ```
    PS C:\Users\aayus> ollama run qwen3:1.7b
    ```
- after you've inputted th above command, you can now enter any message/prompt that you would want to ask to your local AI-Model, it'll look somewhat like this:
    ``` 
    PS C:\Users\aayus> ollama run qwen3:1.7b
    >>> Send a message (/? for help)
    ```
- **Congratulations!** you now have full access to AI-Models offline, and you can use them to generate you a code or content of your choice.
---

## Some Other Important Commands

After successfully installing and running your first AI-Model locally, you would want to install and run more such similar AI-Models.

Below are some important Commands that you can use (only if you'd want to)

1. **check the list of all your locally installed AI-Models:**
    ```
    PS C:\Users\aayus> ollama list
    ```
    the output should look somewhat like this:
    ```
    PS C:\Users\aayus> ollama list
    NAME                          ID              SIZE      MODIFIED
    qwen3:1.7b                    8f68893c685c    1.4 GB    3 hours ago
    mistral:7b-instruct-q4_K_M    1a85656b534f    4.4 GB    4 hours ago
    gemma:2b-instruct-q4_K_M      073d0876d678    1.8 GB    5 hours ago
    gemma:latest                  a72c7f4d0a15    5.0 GB    5 hours ago
    phi:latest                    e2fd6321a5fe    1.6 GB    6 hours ago
    tinyllama:latest              2644915ede35    637 MB    6 hours ago
    mistral:latest                3944fe81ec14    4.1 GB    29 hours ago
    llama2:latest                 78e26419b446    3.8 GB    30 hours ago
2. **run a one-shot prompt without entering the interactive chat mode:**
    ```
    PS C:\Users\aayus> ollama run <model> "enter your message here like this"
    ```
    this command will generate output without having to enter a prompt separately on the next line, just a small but useful command - better to remember it.
3. **delete any specific model from your system to free up space:**
    ```
    PS C:\Users\aayus> ollama delete <model>
    ```
4. **create a custom model using a Modelfile:**
    ```
    PS C:\Users\aayus> ollama create <model>
    ```
    you can use this command to customize your existing AI-Model to do tasks - the tasks which can be inputted separately in a extension-less file called as 'Modelfile' (don't worry - we'll discuss more about this command in our next blog)
5. **start a local server to access any of your model via REST API:**
    ```
    PS C:\Users\aayus> ollama serve 
    ```
---
```
Thank You for Reading - This Blog has been written by Aayush Mishra for - Blogspot!
PS - We'll discuss more about Command 4 and 5 in our next upcoming Blog - so stay tuned!
```


