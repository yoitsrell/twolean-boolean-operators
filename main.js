/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(one){
  return one > 5
}

function topScore(two, three){
  return two > three
}

function isInDanger(grade1){
  return grade1 >= 60 && grade1 <= 71;
}

function isCoasting (grade2){
  return grade2 >= 72 && grade2 <= 83
}

function isSucceeding (grade3){
  return grade3 >= 84 && grade3 <= 92
}

function isFailing (grade4){
  return grade4 <=59
}

function isAcing (grade5){
  return grade5 >92
}

function isStudent (student){
  return student === 'student'
}

function isTeacher (teach){
  return teach === 'teacher'
}

function isAdmin (admin){
  return admin === 'admin'
}

function isElementary(elem){
  return elem === 'elementary'
}

function isMiddleSchoolTeacher(mid, mid2){
  return mid === 'teacher' && mid2 >= 6 && mid2 <= 8 
}

function notAnElementarySchoolAdministrator(admin1,admin2){
  return admin1 !== 'elementary' || admin2 == 'teacher'
}

function differentPeople(name1,name2){
  return name1 !== name2
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}