**/////////////////////////////////////////////////////////CREAT TABLES///////////////////////////////////////////////**


CREATE TABLE users (
    ID int NOT NULL,
    Student_Name VARCHAR2(45) NOT NULL,
    Student_Email VARCHAR2(100),
    Gender VARCHAR2(10),
    PRIMARY KEY (ID)
);

CREATE TABLE codekata (
    USER_ID int NOT NULL,
    Problem_ID int NOT NULL,
    Problem_name VARCHAR2(45) NOT NULL,
    completed VARCHAR2(100),
    total VARCHAR2(10),
    FOREIGN KEY (USER_ID) REFERENCES users(ID)
);


CREATE TABLE attendance(
    USER_ID int NOT NULL,
    Class_Date date,
    Status VARCHAR2(100),
    FOREIGN KEY (USER_ID) REFERENCES users(ID)
);


CREATE TABLE topics(
    Topic_ID int NOT NULL,
    Class_topic VARCHAR2(100) NOT NULL,
    Class_Date date,
    Class_content VARCHAR2(100),
    Class_preread VARCHAR2(100),
    PRIMARY KEY (Topic_ID)
);


CREATE TABLE tasks(
    Topic_ID int NOT NULL,
    Task_ID int UNIQUE,
    task_detail VARCHAR2(100) NOT NULL,
    Class_Date date,
    FOREIGN KEY (Topic_ID) REFERENCES topics(Topic_ID)
);


CREATE TABLE company_drives(
    User_ID Number(3),
    Drive_ID int NOT NULL,
    Company_name VARCHAR2(100) NOT NULL,
    Drive_data date,
    FOREIGN KEY (User_ID) REFERENCES users(ID)
);

CREATE TABLE mentors(
    Mentor_Id int NOT NULL,
    Mentor_name VARCHAR2(100) NOT NULL,
    Mentor_skill VARCHAR2(100),
    PRIMARY KEY (Mentor_Id)
);

CREATE TABLE students_activated_courses(
    User_ID int NOT NULL,
    Course_id int NOT NULL,
    Course_name VARCHAR2(100) NOT NULL,
    Activated_date date,
    Expiry_date date,
    FOREIGN KEY (User_ID) REFERENCES users(ID),
    FOREIGN KEY (Course_id) REFERENCES courses(Course_id)
);

CREATE TABLE courses(
    Course_id int NOT NULL,
    Couse_Name VARCHAR2(100) UNIQUE,
    Course_detail VARCHAR2(100) NOT NULL,
    PRIMARY KEY (Course_id)
);


create table Mentor_map(
User_ID  Number(3) not null,
mentor_id Number(3) not null,
FOREIGN KEY (User_ID) REFERENCES users(ID),
FOREIGN KEY (mentor_id) REFERENCES mentors(mentor_id)
);

**///////////////////////////////////////////////////////// All the tables//////////////////////////////////////////**

select * from users;
select * from codekata;
select * from attendance;
select * from topics;
select * from tasks;
select * from company_drives;
select * from mentors;
select * from students_activated_courses;
select * from courses;



**/////////////////////////////////////////////////////////Insert data into users//////////////////////////////////////////**

insert into users values(1,'Sanjeev','sanjeev@gmail.com','Male');
insert into users values(2,'Sanju','sanju@gmail.com','Male');
insert into users values(3,'Shubham','shubham@gmail.com','Male');
insert into users values(4,'Sarika','sarika@gmail.com','Female');
insert into users values(5,'Vigneshwar','vigneshwar@gmail.com','Male');


**/////////////////////////////////////////////////////////Insert data into codekata//////////////////////////////////////////**

insert into codekata values(1,1,'Numbersystem',20,50);
insert into codekata values(1,2,'Array',2,30);
insert into codekata values(1,3,'Strings',25,60);

insert into codekata values(2,1,'Numbersystem',2,50);
insert into codekata values(2,2,'Array',20,30);
insert into codekata values(2,3,'Strings',5,60);

insert into codekata values(3,1,'Numbersystem',9,50);
insert into codekata values(3,2,'Array',8,30);
insert into codekata values(3,3,'Strings',7,60);

insert into codekata values(4,1,'Numbersystem',2,50);
insert into codekata values(4,2,'Array',29,30);
insert into codekata values(4,3,'Strings',60,60);

insert into codekata values(5,1,'Numbersystem',50,50);
insert into codekata values(5,2,'Array',30,30);
insert into codekata values(5,3,'Strings',60,60);

**/////////////////////////////////////////////////////insert data into attendance//////////////////////////////////////////**
//user-Id: 1
insert into attendance values(1,to_date('10/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(1,to_date('11/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(1,to_date('12/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(1,to_date('13/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(1,to_date('14/01/2022','DD/MM/YYYY'),'Yes');

insert into attendance values(2,to_date('10/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(2,to_date('11/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(2,to_date('12/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(2,to_date('13/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(2,to_date('14/01/2022','DD/MM/YYYY'),'Yes');

insert into attendance values(3,to_date('10/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(3,to_date('11/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(3,to_date('12/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(3,to_date('13/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(3,to_date('14/01/2022','DD/MM/YYYY'),'Yes');

insert into attendance values(4,to_date('10/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(4,to_date('11/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(4,to_date('12/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(4,to_date('13/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(4,to_date('14/01/2022','DD/MM/YYYY'),'Yes');

insert into attendance values(5,to_date('10/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(5,to_date('11/01/2022','DD/MM/YYYY'),'No');
insert into attendance values(5,to_date('12/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(5,to_date('13/01/2022','DD/MM/YYYY'),'Yes');
insert into attendance values(5,to_date('14/01/2022','DD/MM/YYYY'),'Yes');

**////////////////////////////////////////////insert data into topics///////////////////////////////////////////////////////**

insert into topics values(1,'Nodejs & Expressjs',to_date('10/01/2022','DD/MM/YYYY'),'What is express,API methods','https://expressjs.com'); 
insert into topics values(2,'Node & mongo DB connectivity',to_date('11/01/2022','DD/MM/YYYY'),'Connection to MongoDB(local & atlas)',''); 
insert into topics values(3,'Heroku deployment',to_date('12/01/2022','DD/MM/YYYY'),'dotenv,Deployment','https://www.npmjs.com/package/dotenv'); 
insert into topics values(4,'Authentication',to_date('13/01/2022','DD/MM/YYYY'),'Authenticate,Signup','https://www.npmjs.com/package/authS'); 
insert into topics values(5,'Authorization',to_date('14/01/2022','DD/MM/YYYY'),'Authorization,Login','https://www.npmjs.com/package/authL'); 



**/////////////////////////////////////////////insert data into tasks////////////////////////////////////////////////////////**

insert into tasks VALUES (1,1,'Create API',to_date('10/01/2022','DD/MM/YYYY'));
insert into tasks VALUES (2,2.1,'Host API in Heroku',to_date('11/01/2022','DD/MM/YYYY'));
insert into tasks VALUES (3,3.1,'CREATE mongodB',to_date('12/01/2022','DD/MM/YYYY'));
insert into tasks VALUES (3,3.1,'Deploy MONGO Atlas',to_date('13/01/2022','DD/MM/YYYY'));
insert into tasks VALUES (3,3.1,'Connect Api & Atlas',to_date('14/01/2022','DD/MM/YYYY'));

**/////////////////////////////////////////////////////////insert data into company_drives 

insert into company_drives VALUES (1,'TCS',to_date('10/01/2022','DD/MM/YYYY'));
insert into company_drives VALUES (2,'Wipro',to_date('11/02/2022','DD/MM/YYYY'));
insert into company_drives VALUES (3,'infosys',to_date('12/03/2022','DD/MM/YYYY'));
insert into company_drives VALUES (4,'Accenture',to_date('13/03/2022','DD/MM/YYYY'));
insert into company_drives VALUES (5,'Amazon',to_date('14/04/2022','DD/MM/YYYY'));


**/////////////////////////////////////////////////////////insert data into mentors//////////////////////////////////////////** 
insert into mentors values(1,'lavish','Js,HTML,CSS');
insert into mentors values(1,'Ragav','React.js');
insert into mentors values(3,'Mohan','JS');
insert into mentors values(4,'Ramesh','Anguar');
insert into mentors values(5,'Sanju','Mongo');

**/////////////////////////////////////////////////////////insert data into courses//////////////////////////////////////////** 

insert into courses values(1,'MERN','React.js');
insert into courses values(2,'MEAN','Angular.js');
insert into courses values(3,'Oracle','Plsql,Sql');
insert into courses values(4,'Python','python,Django');
insert into courses values(5,'Java','Java,Spring');

**/////////////////////////////////////////////////////////insert into students_activated_courses//////////////////////////////////////////**

insert into students_activated_courses values (1,1,TO_DATE('06/01/2022','DD/MM/YYYY'),TO_DATE('04/02/2022','DD/MM/YYYY'));
insert into students_activated_courses values (1,2,TO_DATE('05/02/2022','DD/MM/YYYY'),TO_DATE('03/03/2022','DD/MM/YYYY'));
insert into students_activated_courses values (2,1,TO_DATE('06/01/2022','DD/MM/YYYY'),TO_DATE('08/02/2022','DD/MM/YYYY'));
insert into students_activated_courses values (2,3,TO_DATE('09/02/2022','DD/MM/YYYY'),TO_DATE('09/03/2022','DD/MM/YYYY'));
insert into students_activated_courses values (2,5,TO_DATE('09/01/2022','DD/MM/YYYY'),TO_DATE('09/02/2022','DD/MM/YYYY'));
insert into students_activated_courses values (3,2,TO_DATE('05/02/2022','DD/MM/YYYY'),TO_DATE('03/03/2022','DD/MM/YYYY'));
insert into students_activated_courses values (4,2,TO_DATE('09/01/2022','DD/MM/YYYY'),TO_DATE('09/02/2022','DD/MM/YYYY'));
insert into students_activated_courses values (4,4,TO_DATE('08/02/2022','DD/MM/YYYY'),TO_DATE('09/04/2022','DD/MM/YYYY'));
insert into students_activated_courses values (5,1,TO_DATE('01/01/2022','DD/MM/YYYY'),TO_DATE('09/02/2022','DD/MM/YYYY'));

**/////////////////////////////////////////////////////////insert data into mentor mapping table//////////////////////////////////////////**

insert into mentor_map values ('1','1');
insert into mentor_map values ('2','1');
insert into mentor_map values ('3','3');
insert into mentor_map values ('4','2');
insert into mentor_map values ('5','4');

************************/////////////////////////////Answers////////////////////////////////////*****************************************

3. get number problems solved in codekata by combining the users

select * from users join codekata on users.id=codekata.user_id and codekata.problem_name='Numbers';

4. display the no of company drives attended by a user

select users.student_name as Name,count(company_drives.company_name) as No_of_drives  
from users join company_drives 
on users.id=company_drives.user_id
group by users.student_name;

5. combine and display students_activated_courses and courses for a specific user groping them based on the course

select users.student_name as Name,courses.couse_name from students_activated_courses join courses on courses.course_id=students_activated_courses.course_id left join users on users.id=students_activated_courses.user_id;

6. list all the mentors

select * from mentors;

7. list the number of students that are assigned for a mentor

select a.mentor_name,count(c.user_id) as No_of_students from mentors a left join Mentor_map c on a.mentor_id=c.mentor_id left join users b on c.user_id=b.id
group by a.mentor_name;
