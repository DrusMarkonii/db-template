create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    phone VARCHAR(255),
    job VARCHAR(255)
);

create TABLE pet_project(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES person (id)
);