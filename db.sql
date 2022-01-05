create function checkRoles(user_id int)
returns int
as
$$
declare
	ur roles;
begin
	select user_role into ur from users where users.id = user_id;
	if ur = 'teacher' then
    	return (select 1);
	else 
    	return (select 0);
    end if;
end;
$$
language plpgsql;

create function checkUniversityStudent(user_id int)
returns int
as
$$
declare
	university int;
begin
	select university_id into university from users  where  users.id = user_id;
	return university;
end;
$$
language plpgsql;

create function checkUniversityCourse(course_id int)
returns int
as
$$
declare
	university int;
begin
	select university_id into university from courses  where  courses.id = course_id;
	return university;
end;
$$
language plpgsql;


create function checkStudentCourse(student int, course int )
returns int
as
$$
declare
 id_course int;
begin
	select course_id into id_course  from students_courses  where  course = course_id and student = student_id  ;
	if id_course = course then
    	return (select 1);
	else 
    	return (select 0);
    end if;
    return id_course;
end;
$$
language plpgsql;



create table universities(
	id serial primary key,
	country varchar(30) not null,
	city varchar(30) not null,
	name varchar(50) not null,
	accreditation int2 not null
);


create type roles as enum ('student', 'teacher');

create table users(
	id serial primary key,
	first_name varchar(20) not null,
	last_name varchar(30) not null,
	age int not null,
	user_role roles,
	university_id int not null,
	foreign key (university_id) references universities(id)
);


create table courses(
	id serial primary key,
	name varchar(30) not null,
	teacher_id int not null,
	university_id int not null,
	foreign key (teacher_id) references users(id) on delete set null,
	foreign key (university_id) references universities(id) on delete cascade,
	constraint check_user_role
	check (checkroles(teacher_id) = 1),
	unique (name, teacher_id, university_id));
);

create table students_courses(
	student_id int not null,
	course_id int not null,
	foreign key (student_id) references users(id) on delete cascade,
	foreign key (course_id) references courses(id) on delete cascade,
	constraint check_univercity
	check (checkuniversitystudent(student_id) = checkuniversitycourse(course_id)),
	constraint check_user_role
	check (checkroles(student_id) = 0),
	unique (student_id, course_id)
);

create table marks(
	id serial primary key,
	mark int not null,
	student_id int not null,
	course_id int not null,
	foreign key (student_id) references users(id) on delete cascade,
	foreign key (course_id) references courses(id) on delete cascade,
	constraint check_student_course
	check (checkstudentcourse(student_id, course_id) = 1),
	constraint check_user_role
	check (checkroles(student_id) = 0)
);

insert into universities (country, city, name, accreditation)
values
('Ukraine', 'Dnipro', 'DIIT', 3),
('Ukraine', 'Kyiv', 'KPI', 3),
('Ukraine', 'Dnipro', 'DNU', 3)


insert into users (first_name, last_name, age, user_role, university_id)
values
('Johnatan', 'Joestar', 45, 'teacher', 1),
('Jollin', 'Kudjo', 38, 'teacher', 1),
('Masasi', 'Kishimoto', 51, 'teacher', 2),
('Peter', 'Parker', 64, 'teacher', 2),
('John', 'Doe', 35, 'teacher', 3),
('Katrin', 'Malinich', 21, 'student', 1),
('Abraham', 'Turner', 20, 'student', 1),
('Dina', 'Brown', 18, 'student', 2),
('Kaneki', 'Kenichi', 19, 'student', 2),
('Karamas', 'Kaur', 22, 'student', 3);

insert into courses (name, teacher_id, university_id)
values
('Design', 1, 1),
('DevOps', 1, 1),
('Unity', 2, 1),
('Unreal Engine', 2, 1),
('Ruby', 3, 2),
('Cooking', 3, 2),
('Travel', 4, 2),
('JavaScript', 4, 2),
('Game Desinger', 5, 3),
('PHP', 5, 3);

insert into students_courses (student_id, course_id)
values
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(10, 9),
(10, 10);


insert into marks (mark, student_id, course_id)
values
(85, 6, 1),
(90, 6, 1),
(81, 6, 2),
(95, 6, 2),
(80, 6, 3),
(90, 6, 4),
(74, 7, 1),
(78, 7, 2),
(80, 7, 3),
(69, 7, 4),
(60, 8, 5),
(65, 8, 6),
(70, 8, 7),
(68, 8, 8),
(92, 9, 5),
(95, 9, 6),
(94, 9, 7),
(97, 9, 8),
(80, 10, 9),
(81, 10, 10);



