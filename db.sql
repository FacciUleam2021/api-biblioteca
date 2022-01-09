--       AUTORES      ----

CREATE TABLE autor (
  id INT(11) NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) DEFAULT NULL,
  lastname VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO autor values 
  (1, 'Esteban', 'Martinez'),
  (2, 'Sandra', 'Guapaz'),
  (3, 'Leonel', 'Usiña');

SELECT * FROM autor;

--       CATEGORIAS      ----

CREATE TABLE categorias (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO categorias values 
  (1, 'Ciencia'),
  (2, 'Entrenemiento social'),
  (3, 'Historia basica');

SELECT * FROM categorias;

--       EDITORIALES      ----

CREATE TABLE editorial (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) DEFAULT NULL,
  pais VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO editorial values 
  (1, 'Santillana', 'Ecuador'),
  (2, 'Unclear', 'Ecuador'),
  (3, 'Selentinos', 'Ecuador');

SELECT * FROM editorial;

--       ROLES      ----

CREATE TABLE roles (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO roles values 
  (1, 'Admin'),
  (2, 'user');

SELECT * FROM roles;

--       USUARIOS      ----


CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) DEFAULT NULL,
  name VARCHAR(50) DEFAULT NULL,
  age VARCHAR(10) DEFAULT NULL,
  email VARCHAR(50) DEFAULT NULL,
  img VARCHAR(250) DEFAULT NULL,
  status VARCHAR(2) DEFAULT NULL,
  password VARCHAR(250) DEFAULT NULL,
  rol int(11) NOT NULL,
  PRIMARY KEY(id),
  INDEX rol (rol),
    FOREIGN KEY (rol)
        REFERENCES roles(id)
        ON DELETE CASCADE
);


--       libro      ----


CREATE TABLE libro (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) DEFAULT NULL,
  anio VARCHAR(10) DEFAULT NULL,
  link VARCHAR(200) DEFAULT NULL,
  fkrelacionados VARCHAR(250) DEFAULT NULL,
  fkautor int(11) NOT NULL,
  fkcategoria int(11) NOT NULL,
  fkeditorial int(11) NOT NULL,
  PRIMARY KEY(id)
);

ALTER TABLE libro
  ADD KEY `FK_CONTIENE` (`fkeditorial`),
  ADD KEY `FK_DIVIDIDA` (`fkcategoria`),
  ADD KEY `FK_TIENE` (`fkautor`);

  ALTER TABLE libro
  ADD CONSTRAINT `FK_CONTIENE` FOREIGN KEY (`fkeditorial`) REFERENCES `editorial` (`id`),
  ADD CONSTRAINT `FK_DIVIDIDA` FOREIGN KEY (`fkcategoria`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `FK_TIENE` FOREIGN KEY (`fkautor`) REFERENCES `autor` (`id`);

  INSERT INTO libro values 
  (1, 'El Señor de los Anillos', '2018-02-07', 'http://localhost:3001/1.jpg', '1', 1, 1, 1),
  (2, 'El Señor de los Anillos', '2018-02-07', 'http://localhost:3001/2.jpg', '1', 2, 1, 2),
  (3, 'El Señor de los Anillos', '2018-02-07', 'http://localhost:3001/3.jpg', '1,2', 2, 1, 2);

  ALTER TABLE libro
ADD documento varchar(155);