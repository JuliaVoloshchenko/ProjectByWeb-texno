CREATE TABLE STUDENT_INFO (
  Id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
);

INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Ольга', 30, 'Москва');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Виктор', 17, 'Москва');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Олег', 20, 'Москва');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Анна', 17, 'Симферополь');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Галина', 16, 'Ставрополь');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Николай', 22, 'Воронеж');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Алексей', 39, 'Москва');
INSERT INTO STUDENT_INFO (name, age, adress) VALUES ('Юлия', 22, 'Саратов');

SELECT name FROM STUDENT_INFO WHERE adress = 'Москва' And age BETWEEN 18 and 30