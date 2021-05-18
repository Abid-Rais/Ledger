from decouple import config
from plaid import Client


client = Client(client_id=config("PLAID_CLIENT_ID"), secret=config(
    "PLAID_SECRET"), environment=config("PLAID_ENVIRONMENT"))
