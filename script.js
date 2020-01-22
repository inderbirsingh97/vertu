let redCircle = document.querySelector(".circle_red");
let redImg = document.querySelector(".img_red");

let BlazerBlueCircle = document.querySelector(".circle_BlazerBlue");
let BlazerBlueImg = document.querySelector(".img_BlazerBlue");

let blackCircle = document.querySelector(".circle_black");
let blackImg = document.querySelector(".img_black");

let DeepImpactBlueCircle = document.querySelector(".circle_DeepImpactBlue");
let DeepImpactBlueImg = document.querySelector(".img_DeepImpactBlue");

let GuardCircle = document.querySelector(".circle_Guard");
let GuardImg = document.querySelector(".img_Guard");

let MagneticCircle = document.querySelector(".circle_Magnetic");
let MagneticImg = document.querySelector(".img_Magnetic");

let MetaliciousCircle = document.querySelector(".circle_Metalicious");
let MetaliciousImg = document.querySelector(".img_Metalicious");

let SilverCircle = document.querySelector(".circle_Silver");
let SilverImg = document.querySelector(".img_Silver");

let SolarCircle = document.querySelector(".circle_Solar");
let SolarImg = document.querySelector(".img_Solar");

window.onload = () => {
  redImg.style.display = "block";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
};

redCircle.addEventListener("click", () => {
  redImg.style.display = "block";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

BlazerBlueCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "block";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

blackCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "block";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

DeepImpactBlueCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "block";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

GuardCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "block";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

MagneticCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "block";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

MetaliciousCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "block";
  SilverImg.style.display = "none";
  SolarImg.style.display = "none";
});

SilverCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "block";
  SolarImg.style.display = "none";
});

SolarCircle.addEventListener("click", () => {
  redImg.style.display = "none";
  BlazerBlueImg.style.display = "none";
  blackImg.style.display = "none";
  DeepImpactBlueImg.style.display = "none";
  GuardImg.style.display = "none";
  MagneticImg.style.display = "none";
  MetaliciousImg.style.display = "none";
  SilverImg.style.display = "none";
  SolarImg.style.display = "block";
});
