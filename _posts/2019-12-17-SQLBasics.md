---
layout: post
title:  "SQL Básico"
date:   2019-12-17
categories: [linux, programacion, SQL]
---

### Instalación de Postgres en Linux

+ Entramos a [postgresql.org](https://www.postgresql.org/) y descargamos la versión correspondiente, en mi caso para Ubuntu 18.04 mediante línia de comandos:

```bash
# Crear el archivo /etc/apt/sources.list.d/pgdg.list y añadir la siguiente línea con el repositorio
$ deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main

# Importar el repositorio con la llave firmada, y actualizar la lista de paquetes
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
$ sudo apt-get update

# Instalación
$ sudo apt install postgresql-10-postgis-2.4-postgis-scripts
$ sudo apt install pgadmin4

# también debemos instalar las herramientas shp2pgsql, raster2pgsql para tenerlas en nustra línea de comandos
$ sudo apt install postgis

# Para importar archivos SHP utilizando shp2pgsql-gui
$ sudo apt install postgis-gui

# para abrir shp2pgsql:
$ shp2pgsql-gui

# pgRouting 2.6 package
$ sudo apt install postgresql-10-pgrouting
```
### Instalación de PgAdmin4 en Linux
https://remot-technologies.com/como-instalar-pgadmin-4-en-ubuntu-18-04/?utm_campaign=nosolosig&utm_medium=email&utm_source=mailing381

### Trabajando en PostgreSQL desde la terminal

+ user: postgres
+ pass: postgres
+ port: 5432

```bash
# En el caso de no haber superusuario, crearlo en el terminal

sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;

# crear la extensión postgis en caso de no tenerla
CREATE EXTENSION postgis

Si la conexion falla, hay que cambiar en la configuracion dos archivos, hba y postgres.cong. Cambiar localhost por * y luego las conexiones por 0.0.0... etc

# Entrar como usuario
 $ sudo -i -u postgres
 $ 'psql'

# o todo junto
 $ 'sudo -u postgres psql'

# Entrar a la BD desde terminal
 $ sudo -u postgres psql -d ojodato
```

### Sentencias SQL básicas

```sql
+ SELECT * FROM [table]
+ SELECT [campo1], [campo2]  FROM [table]
+ SELECT [campo1], [campo2]  FROM [table] WHERE [campo1]= 'something' AND [campo1]>200 AND NOT LIKE 'this%'
+ SELECT [campo1], [campo2]  FROM [table] WHERE [campo1] NOT IN ([campo1] , [campo2])
+ SELECT [campo1], [campo2]  FROM [table] ORDER BY [campoX]
+ SELECT [campo1], [campo2]  FROM [table] ORDER BY [campoX], [campo2]
+ SELECT [campo1], [campo2]  FROM [table] ORDER BY [campoX], [campo2] DESC
+ SELECT [campo1]*2, [campo2] AS [nombreCampo], LEFT ([campo3, 3])  FROM [table] ORDER BY [campoX], [campo2]
+ SELECT [campo1]*2, [campo2] AS [nombreCampo], LEFT ([campo3, 3]) INTO [nombreCampo] FROM [table] ORDER BY [campoX], [campo2]
+ SELECT [campo1] FROM ([campo1]SELECT [campo1]*2, [campo2] AS [nombreCampo], LEFT ([campo3, 3]) INTO [nombreCampo] FROM [table] ORDER BY [campoX], [campo2]) AS subq;
+ SELECT DISTINCT [campo1] FROM [campo2]
```

### Sentencias SQL: Funciones

```sql
- SELECT COUNT(*) FROM [campo];
+ COUNT(*), SUM(), AVG(), MIN(), MAX()
+ STDEV(), VARIANCE(), CORR(one, two), COVAR(one, two)
+ SELECT COUNT(*), AVG(campo), MAX(campo) FROM campo;

+ SELECT campo, COUNT(*) FROM campo WHERE campo= 'atributo' GROUP BY campo ORDER BY campo;
```

### Tipos de datos POR COMPLETAR

| Nombre                                  | Alias              | Descripcion                                            | 
|-----------------------------------------|--------------------|--------------------------------------------------------| 
| bigint                                  | int8               | entero con signo de ocho bytes                         | 
| bigserial                               | serial8            | entero autoincremental de ocho bytes                   | 
| bit [ (n) ]                             |                    | cadena de bits de longitud fija                        | 
| bit varying [ (n) ]                     | varbit             | cadena de bits de longitud variable                    | 
| boolean                                 | bool               | Booleano lógico (verdadero/falso)                      | 
| box                                     |                    | rectángulo en un plano                                 | 
| bytea                                   |                    | datos binarios ("arreglo de bytes")                    | 
| character varying [ (n) ]               | varchar [ (n) ]    | cadena de caracteres de longitud variable              | 
| character [ (n) ]                       | char [ (n) ]       | cadena de caracteres de longitud fija                  | 
| cidr                                    |                    | dirección de red IPv4 o IPv6                           | 
| circle                                  |                    | circulo en un plano                                    | 
| date                                    |                    | fecha de calendario (año, mes, día)                    | 
| double precision                        | float8             | número de punto flotante de precisión doble (8 bytes)  | 
| inet                                    |                    | dirección de equipo de IPv4 o IPv6                     | 
| integer                                 | int, int4          | entero con signo de cuatro bytes                       | 
| interval [ fields ] [ (p) ]             |                    | lapso de tiempo                                        | 
| line                                    |                    | linea infinita en un plano                             | 
| lseg                                    |                    | segmento de linea en un plano                          | 
| macaddr                                 |                    | Dirección MAC (Media Access Control)                   | 
| money                                   |                    | importe monetario                                      | 
| numeric [ (p, s) ]                      | decimal [ (p, s) ] | numérico exacto de precisión seleccionable             | 
| path                                    |                    | camino geométrico en un plano                          | 
| point                                   |                    | punto geométrico en un plano                           | 
| polygon                                 |                    | camino cerrado geométrico en un plano                  | 
| real                                    | float4             | número de punto flotante de precisión simple (4 bytes) | 
| smallint                                | int2               | entero con signo de dos bytes                          | 
| serial                                  | serial4            | entero autoincremental de cuatro bytes                 | 
| text                                    |                    | cadena de caracteres de longitud variable              | 
| time [ (p) ] [ without time zone ]      |                    | hora del día (sin zona horaria)                        | 
| time [ (p) ] with time zone             | timetz             | gora del día, incluyendo zona horaria                  | 
| timestamp [ (p) ] [ without time zone ] |                    | fecha y hora (sin zona horaria)                        | 
| timestamp [ (p) ] with time zone        | timestamptz        | fecha y hora, incluyendo zona horaria                  | 
| tsquery                                 |                    | consulta de búsqueda de texto                          | 
| tsvector                                |                    | documento de búsqueda de texto                         | 
| txid_snapshot                           |                    | instantánea de ID de transacción a nivel de usuario    | 
| uuid                                    |                    | identificador universalmente único                     | 
| xml                                     |                    | datos XML                                              | 


### Conversión de datos

```sql
+ CAST(variable AS tyoe)
 + CAST('2015-10-24' as DATE)
+ variable::type
 + '2015-10-24'::DATE'
 + SELECT '2015-10-24 13:23:45'::timestamp - '2015-10-24 13:50:45'::timestamp
 + SELECT 123456.569::double precision
```

#### Expresión CASE

```sql
+ WHEN predicado1 THEN expresion1
+ WHEN predicado2 THEN expresion2
+ WHEN predicado3 THEN expresion3 ELSE expresion4

# Ejemplo:
SELECT campo1, campo2, CASE WHEN long_x <-104.4 THEN 'West' WHEN long_x >-103.4 THEN 'East'
ELSE 'Center' END As location, campo3 FROM tabla1
```  

### Trabajando con geometrías 

```sql
# Obtener longitudes con st_Length(line)
+ Geometry: longitudes cartesianas en unidades SRID
+ Geography: longitudes en metros sobre el elipsoide

# ST_3DLenght(line)
+ Geometry: longitudes cartesianas en unidades SRID
+ Geography: no soportado

# ST_LenghtSpheroid(line, spheroid)
# ST_Area(polygon)
+ Geometry: área cartesiana en unidades SRID
+ Geography: área en metros cuadrados sobre el elipsoide

# ST_Perimeter(polygon), ST_3DPerimeter(polygon)

*Calcular distancias entre geometrías*

+ ST_Distance(geom1, geom2)

+ ST_3DDistance(geom1, geom2)

+ ST_DistanceSphere(geom1, geom2), ST_DistanceSpheroid(geom1, geom2)

+ ST_ClosesPoint(geom1, geom2), ST_ShortestLine(geom1, geom2)

+ ST_MaxDistance(geom1, geom2), ST_LongestLine(geom1, geom2)

# Ejemplos
+ SELECT campo, ST_Length(geom) FROM tabla
 + SELECT campo, ST_Length(geom::geography) FROM tabla
 + SELECT campo, ST_Length(geom::geography), ST_Length(ST_transform(geom, 25830)) FROM tabla
 + SELECT campo, ST_Length(geom::geography) - ST_Length(ST_transform(geom, 25830)) as diff FROM tabla ORDER BY campo DESC;

 + SELECT campo, ST_Area(geom::geography), ST_Perimeter(geom::geography) FROM tabla;
```

### Trabajando con geometrías

**Funciones para convertir coordenadas a texto**

+ ST_AsText(geom), ST_AsEWKT(geom)
+ ST_AsGeoJSON(geom)
+ ST_AsGML(geom), ST_AsKML(geom)
+ ST_AsMVT(table)

**Trabajando con coordenadas**
+ ST_X(point), ST_Y(point), ST_Z(point), ST_M(point)
+ ST_StartPoint(geom), ST_EndPoint(geom)
+ ST_PointN(geom, n), ST_LineInterpolatePoint(geom, proportion)
+ ST_GeometryN(geom, n)
+ ST_ExteriorRing(geom), ST_InteriorRingN(geom, n)

```sql
# Ejemplos

+ SELECT campo, ST_AsText(geom), ST_AsGeoJSON(ST_Transform(geom, 25830)), ST_AsGML(geom), ST_AsKML(geom) FROM tabla
+ SELECT campo, ST_AsText(geom), ST_AsGeoJSON(ST_Transform(geom, 25830), 1), ST_AsGML(geom), ST_AsKML(geom) FROM tabla
+ SELECT campo, ST_X(geom), ST_Y(geom), ST_X(ST_Transform(geom, 25830)), ST_Y(ST_Transform(geom, 25830))  FROM tabla
+ SELECT campo, ST_AsText(ST_startpoint(ST_GeometryN(geom, 1)), ST_AsText(ST_LineInterpolatePoint(ST_GeometryN(geom,1),0.5) ST_AsText(ST_endpoint(ST_GeometryN(geom, 1)) FROM tabla

# Relaciones espaciales

+ ST_Intersects(geom1, geom2) / NOT ST_Intersects
+ ST_Disjoint(geom1, geom2)
+ ST_Contains(geom1, geom2)
+ ST_Covers(geom1, geom2)
+ ST_Within(geom1, geom2)
+ ST_CoveredBy(geom1, geom2)
+ ST_Crosses(geom1, geom2)
+ ST_DWithin(geom1, geom2, distance)
+ ST_DFullyWithin(geom1, geom2, distance)
+ ST_Equals(geom1, geom2)
+ ST_Overlaps(geom1, geom2)
+ ST_Touches(geom1, geom2)
+ DE-91M Relationships

# Sentencias espaciales multitabla

+ SELECT expression FROM table1 JOIN table2 ON predicate
 + field = field
 + ST_Intersects(table.geom, table.geom)
 + ST_DWithin(table.geom, table.geom)
+ SELECT expression FROM table1 JOIN table2 ON predicate JOIN table3 ON predicate

+ SELECT a.campo, b.campo, c.campo FROM tabla1 a JOIN tabla2 b ON ST_Intersects(a.geom, b.geom) ORDER BY a.campo, b.campo
+ SELECT a.campo, b.campo, c.campo FROM tabla1 a JOIN tabla2 b ON ST_DWithin(a.geom, b.geom, 0.005) JOIN tabla3 c ON a.campo = c.campo ORDER BY a.campo, b.campo
+ SELECT a.campo, b.campo, c.campo, ST_Distance(a.geom, b.geom) FROM tabla1 a JOIN tabla2 b ON ST_Distance(a.geom, b.geom)=0 ORDER BY a.campo, b.campo

+ SELECT a.campo, b.campo, c.campo, ST_Distance(a.geom::geography, b.geom::geography) FROM tabla1 a JOIN tabla2 b ON ST_Distance(a.geom, b.geom)=0 ORDER BY a.campo, b.campo
+ SELECT a.campo, b.campo, c.campo, ST_Transform(a.geom, 25830), ST_Transform(b.geom, 25830) FROM tabla1 a JOIN tabla2 b ON ST_Distance(a.geom::geography, b.geom::geography)=430.2 ORDER BY a.campo, b.campo
+ SELECT a.campo, b.campo, c.campo, ST_Distance(a.geom::geography, b.geom::geography) FROM tabla1 a JOIN tabla2 b ON ST_Distance(a.geom, b.geom)=0 WHERE ST_Distance(a.geom::geography, b.geom::geography) < 402.5 ORDER BY a.campo, b.campo


# Ejemplos sentencias SQL: Multi tablas

+ SELECT [campo1], [campo2]  FROM [table1], [table2]
+ SELECT [campo1.atributo], [campo2.atributo]  FROM [table1], [table2]
+ SELECT [n.atributo], [m.atributo]  FROM [table1 n], [table2 m]

# Ejemplos sentencias SQL: Uniones
## INNER JOIN
 + SELECT * FROM [tabla] JOIN [tabla] ON [campo=campo]
## LEFT JOIN
 + SELECT * FROM [tabla] LEFT OUTER JOIN [tabla] ON [campo=campo]
## RIGHT JOIN
 + SELECT * FROM [tabla] RIGHT OUTER JOIN [tabla] ON [campo=campo]
## FULL OUTER JOIN
+ SELECT * FROM [tabla] FULL OUTER JOIN [tabla] ON [campo=campo]
## CROSS JOIN
 + SELECT * FROM [tabla] CROSS JOIN [tabla] ON [campo=campo]
```

### Funciones de procesamiento de geometría: Buffer
#### ST_Buffer(geom, radius, [segments], [options])
 + Geometry - radio en unidades SRID
 + Geography - radio en metros
 + Fixed radius - constante
 + Based on field - por campo
 + Based on classification - UNION ALL
 + Multi-distance - UNION ALL
 + Negative radius
 + '#' of segments in a quarter circle

```SQL
# Ejemplos

+ SELECT campo, campo, ST_Buffer(geom, 0.01) AS geom FROM tabla
+ SELECT campo, campo, ST_Buffer(geom::geography, 804) AS geom FROM tabla
+ SELECT campo, campo, ST_Buffer(ST_Transform(geom, 25830), 804) AS geom FROM tabla
+ SELECT campo, campo, ST_Buffer(ST_Transform(geom, 25030), row_width) AS geom FROM tabla
+ SELECT campo, campo, ST_Buffer(ST_Transform(geom, 25030), CASE WHEN campo='atributo' THEN 600 ELSE 300 END) AS geom FROM tabla
+ SELECT campo, ST_Buffer(ST_Transform(geom, 25830) 400) AS geom, 200 AS bufdist FROM tabla
  UNION ALL
  SELECT campo, ST_Buffer(ST_Transform(geom, 25830) 600) AS geom, 600 AS bufdist FROM tabla
  UNION ALL
  SELECT campo, ST_Buffer(ST_Transform(geom, 25830) 900) AS geom, 900 AS bufdist FROM tabla
```

### Funciones de procesamiento de geometría: Escenarios varios

```SQL
# Escenario1
SELECT
  a.campo,
  b.campo,
  Round((ST_Area(ST_Buffer(ST_Transform(a.geom, 25830), a.row_width))/4034)::numeric, 2) AS total_area,

  Round((ST_Area(ST_Intersection(ST_Buffer(ST_Transform(a.geom, 25830), 600), ST_Buffer(ST_Transform(b.geom, 25830), b.row_width))/4034)::numeric, 2) AS campoAconocer,

  Round((ST_Area(ST_Intersection(ST_Buffer(ST_Transform(a.geom, 25830), 600), ST_Buffer(ST_Transform(a.geom, 25830), a.row_width))/ ST_Area(ST_Buffer(ST_Transform(b.geom, 25830), b.row_width))*100)::numeric, 2) AS campoAconocer,

  ST_Intersection(ST_Buffer(ST_Transform(a.geom, 25830), 600), ST_Buffer(ST_Transform(b.geom, 25830), b.row_width)) AS geom
  FROM tabla a
  JOIN tabla
  ON ST_DWithin(a.geom::geography, b.geom::geography, 600+b.row_width)
  WHERE a.campo_id=X


# Escenario2
SELECT
  a.campo,
  b.campo,
  COUNT (a.*),
  Coalesce(SUM(ROUND((ST_Length(ST_Intersection(a.geom, b.geom)::geography)/1000)::numeric, 4)), 0) AS lenght_km
  FROM tabla a
  LEFT OUTER JOIN tabla b
  ON ST_Intersects(a.geom, b.geom)
  GROUP BY a.campo, b.campo
  ORDER BY lenght_km
  LIMIT 10

# Escenario3
SELECT
  type,
  COUNT(*),
  Sum(ST_Area(ST_Buffer(ST_Transform(geom, 25830), row_width))/10000 AS are_ha,
  ST_Union(ST_Buffer(ST_Transform(geom, 25830), row_width)) AS geom
  INTO tabla
  FROM tabla
  GROUP BY type
  ORDER BY type
```

### Crear tablas

```SQL
CREATE TABLE nombreTabla (
  field1 type [default value][constraint],
  ......);
```

+ Constraints
 + NOT NULL
 + UNIQUE
 + PRIMARY KEY
 + REFERENCES table(field) [ON DELETE behavior]
 + CHECK(predicate)

```SQL
# ejemplo

CREATE TABLE nombreTabla (
  field_id SERIAL PRIMARY KEY,
  field_name VARCHAR(10) UNIQUE NOT NULL,
  field_system VARCHAR(15) DEFAULT 'Palustrine' CHECK (field_system IN ('RIVERINE', 'LACUSTINE', 'PALUSTRINE')) NOT NULL,
  field_subsys VARCHAR(15) DEFAULT '' NO NULL,
  field_class VARCHAR(15),
  field_width DOUBLE PRECISION,
  field_depth DOUBLE PRECISION
  );
SELECT AddGeometryColumn(['schema', 'wetlands', 'geom', 4326, 'MULTIPOLYGON', 2])
```

### Claves primarias

```SQL
CREATE TABLE table_system(
  field_id SERIAL PRIMARY KEY,
  field_name VARCHAR(15)
);

CREATE TABLE table_system(
  field_id SERIAL PRIMARY KEY,
  field_name VARCHAR(15) UNIQUE NOT NULL,
  field_system SMALLINT DEFAULT 1 NOT NULL REFERENCES field_system(field_id),
  field_subsys VARCHAR(15) DEFAULT '' NOT NULL,
  field_class VARCHAR(15),
  field_width DOUBLE PRECISION,
  field_depth DOUBLE PRECISION
  );
SELECT AddGeometryColumn(['schema', 'wetlands', 'geom', 4326, 'MULTIPOLYGON', 2])
```

### Crear Índices

+ No espaciales
 ```SQL 
 CREATE [UNIQUE] INDEX [id_name] ON table (field)
 CREATE UNIQUE INDEX idx_id ON table(another_id)
 ```
+ Índices espaciales
 ```SQL
 + CREATE INDEX [idxname] ON tabla USING GIST (field)
 + CREATE INDEX idx_geom ON tabla USING GIST (geom)
 + CREATE INDEX idx_geom ON tabla USING GIST (ST_Transform(geom, 25830))

+ VACCUM ANALYZE nombreTabla
 ```

### Crear tipos de datos personalizados
 
 ```SQL
+ CREATE DOMAIN domainName AS datatype
 + CREATE DOMAIN nombre0 AS VARCHAR(10)
      CHECK(
        VALUE ~'/d{5}$' OR VALUE ~'/d{5}-{4}$'
      );
 + CREATE DOMAIN nombre1 AS varchar(25)
      NOT NULL
      CHECK (VALUE IN ('nombreCampo', 'nombreCampo', 'nombreCampo'));     
 + CREATE DOMAIN nombre2 AS SMALLINT
      NOT NULL
      CHECK (
        VALUE >= 0 AND VALUE <= 10
      );
 
 # Ejemplos

CREATE TABLE ejemplo (
  id SERIAL PRIMARY KEY,
  campo1 nombre0,
  campo2 nombr1,
  campo3 nombre2
);
```

### Cambiar datos con ALTER
 
 ```SQL
+ ALTER TABLE tablename accion
 + ALTER TABLE nombreTabla DROP COLUMN nombreCampo;
 + ALTER TABLE nombreTabla RENAME COLUMN nombreCampo TO nombreCampo2;
 + ALTER TABLE nombreTabla ALTER COLUMN nombreCampo SET/DROP NOT NULL;
 + ALTER TABLE nombreTabla CONSTRINT nombre FOREIGN KEY (nombreCampo) REFERENCES nombreCampo(nombre_id) ON DELETE CASCADE;

#### Creando nuevos datos
+ INSERT INTO tabla VALUES (exp1, exp2, exp3)
+ INSERT INTO tabla (field1, field2, field3) VALUES (exp1, exp2, exp3)
+ INSERT INTO tabla (field1, field2, field3) VALUES (exp1, exp2, exp3, DEFAULT)
+ INSERT INTO tabla (field1, field2, field3) VALUES (exp1, exp2, exp3), exp1, exp2, exp3), exp1, exp2, exp3), exp1, exp2, exp3)
+ INSERT INTO tabla (field1, field2, field3) SELECT exp1, exp2, exp3 FROM...

 # Ejemplos

+ INSERT INTO tabla (campo) VALUES ('OTRO1'), ('OTRO2'), ('OTRO3')
+ INSERT INTO tabla (id, surveyor, date, result) VALUES (2002, 'JOAN', now()::date, 'activo')
+ INSERT INTO tabla (id, surveyor, date, result) VALUES (2002, 'JOAN', '2018-02-01'::date, 'activo')
```

### Crear datos espaciales

```sql
+ Cast WKT to Geometry
 + 'POINT(-107.5 44.2)'::geometry
 + 'LINESTRING(-107.5 44.2, -104.5 45.2)'::geometry
 + 'MULTILINESTRING((-107.5 44.2, -104.5 45.2)), ((-107.5 44.2, -104.5 45.2))'::geometry
 + ST_Multi('LINESTRING(-107.5 44.2, -104.5 45.2)'::geometry)
+ PostGIS Geometry Constructor
 + ST_GeometryFromText('POINT(-107.5 44.2)')
 + ST_GeomFromGeoJSON('{"type":"Linestring","coordinates":[[x, y], [x,y]]}')
 + ST_GeographyFromText(...), ST_GeomFromEWKT(...), ST_GeomFromGML(...)
 + ST_MakePoint(x,y, [z], [m]), ST_MakePointM(x,y,m)
+ ST_SetSRID('POINT(-107.5 44.2)'::geometry, 4326)

# Ejemplos
+ INSERT INTO tabla (id, surveyor, date, result) 
  VALUES (2002, 'JOAN', '2018-02-01'::date, 'activo'), ST_MULTI(ST_SetSRID(ST_MakePoint-107.5 44.5), 4326)));
```

### Modificar datos espaciales

```SQL
+ UPDATE tablename SET field1=exp1, field2=exp2... WHERE predicate 
+ UPDATE tablename SET row_width=20;
+ UPDATE tablename SET  row_width=20 WHERE type='hola';
+ UPDATE tablename SET  row_width=20 WHERE left(type, 3)='ACC';
+ UPDATE tablename SET  row_width= CASE
    WHEN type='hola' THEN 50
    WHEN left(type, 3)='hola' THEN 30 
    ELSE 20
  END
+ UPDATE campo SET lenght_km = ST_Length(geom::geography)/1000
+ UPDATE tablename SET campo= (SELECT campo FROM tablename WHERE campo);
+ UPDATE tablename SET  lay_y_dd = ST_Y(geom),
                        long_d_dd = ST_X(geom),
                        northing= ST_Transform(ST_X(geom, 25830)),
                        easting= ST_Transform(ST_Y(geom, 25830));
```

### Borrar datos existentes

```SQL
+ DELETE FROM tabla WHERE predicate
+ DELETE FROM tabla
+ DROP TABLE nombreTabla

DELETE FROM tabla WHERE type='nombreAt'
DELETE FROM tabla WHERE id='124'
```


### Lenguaje de control de datos SQL

```SQL
# Crear roles
+ CREATE ROLE admin WITH 
 + CREATEDB
 + CREATEROLE
+ CREATE ROLE joan WITH 
  + LOGIN
  + PASSWORD '13456'
+ ALTER ROLE joan WITH PASSWORD 'ASCVGFD'
+ DROP ROLE joan

# Privilegios
+ GRANT privileges ON table TO rolename (or PUBLIC)
 + SELECT (r)
 + INSERT (a)
 + UPDATE (w)
 + DELETE (d)
 + TRUNCATE (D)
 + CREATE (C)
 + ALL (rawdDC)
+ GRANT UPDATE (col1) ON table TO rolename
+ GRANT rolename TO rolename
+ REVOKE privileges ON table FROM rolename
+ REVOKE rolename FROM rolename
+ GRANT ALL ON table TO admin
+ GRANT SELECT, INSERT, UPDATE, DELETE on table TO client 
+ GRANT SELECT ON table TO client
+ GRANT admin TO joan
+ GRANT client TO joan
+ REVOKE ALL (campo) ON table FROM joan
```

### Comando COPY
```SQL
+ COPY table TO filename 
+ COPY table TO '/home/joan/folder/file.txt'
+ COPY (SELECT * table WHERE campo='att') TO '/home/joan/folder/file.txt'  
+ COPY (SELECT * table WHERE campo='att') TO '/home/joan/folder/file.csv'  WITH CSV HEADER 

+ psql -d myDataBase -U postgres
+ \copy (SELECT * table WHERE campo='att') TO '/home/joan/folder/file.txt';  
```

### Crear topología en PostgreSQL
```SQL
CREATE INDEX children_gix ON chidren USING GIST (geom);


ALTER TABLE carriles ADD COLUMN source integer;
ALTER TABLE carriles ADD COLUMN target integer;
CREATE INDEX roads_source_idx ON roads (source);
CREATE INDEX roads_target_idx ON roads (target);


SELECT pgr_createTopology('carriles', 0.00001, 'geom', 'gid');

# COST shortest path between nodes #1 and #5000 using Dijkstra algorithm

SELECT seq, node, edge, cost as cost, agg_cost, geom
FROM pgr_dijkstra(
   'SELECT id, source, target, st_length(geom, true) as cost FROM roads',
   1,
   5000
) as pt
JOIN roads rd ON pt.edge = rd.id;

# Query to find nearest node
SELECT source
FROM roads
ORDER BY ST_Distance(
    ST_StartPoint(geom),
    ST_SetSRID(ST_MakePoint(20.983455, 52.231909), 4326),
    true
) ASC
LIMIT 1;

Final query:

SELECT seq, node, edge, cost as cost, agg_cost, geom
FROM pgr_dijkstra(
   'SELECT id, source, target, st_length(geom, true) as cost FROM roads',
   (SELECT source FROM roads
    ORDER BY ST_Distance(
        ST_StartPoint(geom),
        ST_SetSRID(ST_MakePoint(20.983455, 52.231909), 4326),
        true
   ) ASC
   LIMIT 1),
   (SELECT source FROM roads
    ORDER BY ST_Distance(
        ST_StartPoint(geom),
        ST_SetSRID(ST_MakePoint(20.973400, 52.169647), 4326),
        true
   ) ASC
   LIMIT 1)
) as pt
JOIN roads rd ON pt.edge = rd.id;
```

## Casos prácticos

### 1. Crear tabla de atributos a partir de un CSV
Imaginemos que tenemos una tabla (coches) que nos han proporcionado en formato CSV con los siguientes atributos:
+ id | date | name | estado | latitud | longitud

Por lo tanto los pasos que seguiríamos son los siguientes:
```SQL
# Agregar geometría a los datos
 + SELECT AddGeometryColumn('coches', 'geom', '4326', 'MULTIPOINT', 2)
 + SELECT * FROM coches
 + UPDATE coches SET geom = ST_Multi(ST_SetSRID(ST_MakePoint(latitud, longitud), 4326))
 + SELECT latitud, longitud, ST_AsText(geom), ST_SRID(geom) FROM coches;
 + UPDATE table SET latitud=ST_Y(ST_GeometryN(geom, 1)), longitud=ST_X(ST_GeometryN(geom, 1))
 + INSERT INTO table (id, lastdate, recentstat, geom) SELECT id+200, lastdate, recentstat, geom
```

### 2. [Idealista](https://joancano.github.io/linux/osm/2019/12/23/idealista/)

**Fuentes y enlaces:**
+ https://medium.com/@tjukanov/animated-routes-with-qgis-9377c1f16021
+ https://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS24UbuntuPGSQL10Apt
+ https://www.digitalocean.com/community/tutorials/como-instalar-y-utilizar-postgresql-en-ubuntu-16-04-es

+ https://live.osgeo.org/en/quickstart/postgis_quickstart.html
+ http://www.bostongis.com/PrinterFriendly.aspx?content_name=postgis_tut02 