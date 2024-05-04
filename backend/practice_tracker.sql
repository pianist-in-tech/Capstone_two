\echo 'Delete and recreate practice_tracker db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE practice_tracker;
CREATE DATABASE practice_tracker;
\connect practice_tracker

\i practice_tracker-schema.sql
\i practice_tracker-seed.sql

\echo 'Delete and recreate practice_tracker_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE practice_tracker_test;
CREATE DATABASE practice_tracker_test;
\connect practice_tracker_test

\i practice_tracker-schema.sql