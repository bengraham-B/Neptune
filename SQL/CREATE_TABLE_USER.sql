CREATE TABLE rrs_user (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT,
    inspection_number INT
);

SELECT * FROM rrs_user;

INSERT INTO rrs_user (name, email, inspection_number) VALUES('${name}', '${email}', '${inspectionNumber}');