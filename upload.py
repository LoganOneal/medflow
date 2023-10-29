from langchain.document_loaders import JSONLoader

import json
from pathlib import Path
from pprint import pprint
import os
from supabase.client import Client, create_client
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import SupabaseVectorStore
from dotenv import load_dotenv

load_dotenv()

supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_PRIVATE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

embeddings = OpenAIEmbeddings()

loader = JSONLoader(
    file_path="data/patients/patient1.json",
    jq_schema=".[]",
    text_content=False,
)

data = loader.load()

pprint(data)

vector_store = SupabaseVectorStore.from_documents(data, embeddings, client=supabase, table_name="documents", query_name="match_documents", chunk_size=256)



