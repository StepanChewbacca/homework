create table universities(
	id serial primary key,
	country varchar(30) not null,
	city varchar(30) not null,
	name varchar(50) not null,
	accreditation int2 not null
);
