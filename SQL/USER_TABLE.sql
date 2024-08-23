CREATE TABLE inspection_user (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(), 
    name TEXT,
    password TEXT,
    privilege TEXT
)