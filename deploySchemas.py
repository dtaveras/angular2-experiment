import sqlite3
from contextlib import closing

DATABASE = './db/testdb'

with closing(sqlite3.connect(DATABASE)) as conn:
    with open('productSchema.sql','r') as f:
        conn.cursor().executescript(f.read())
    conn.commit()