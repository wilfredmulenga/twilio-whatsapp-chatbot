
const welcome = 'Hey there, Have you heard about Coronavirus? It is a new respiratory virus which is' +
 'spreading fast  around the world.More than 540, 000 people are known to be infected and at least 24, 000 deaths' +
' have been recorded worldwide (As of 27-03-2020). Would you like to receive useful information from' +
  'Ministry of Health, WHO, IFRC and UNICEF on how to prevent it? Please reply YES(1.1) or NO(1.2).'

const mainMenu = '[Main Menu] Thank you. What would you like to learn?' +
'(A). What is Coronavirus?' +
'(B). How does the virus spread' +
'(C). What are the symptoms of Coronavirus' +
'(D). How can I protect myself' +
'(E). Protecting others from getting sick' +
'(F). Myths about the virus' +
'(G). Hot Lines' +
'(H): Zambian Measures currently in place'

const no = 'Thank you, you can always come back for more information by sending the word "Corona".' +
' Stay safe and have a nice day'

const A = 'Coronavirus is a new respiratory virus that has not been previously identified in humans.' +
 'The first case of the virus has been identified in Wuhan, Hubei Province, China.' +
 'United Nations, Public health officials and partners are working hard to identify the source of the virus.' +
  'Coronaviruses are a large family of viruses, some causing illness in people and others that circulate' + 
  ' among animals, including camels, cats and bats.' +
'Type 1.1.2 to learn about how the virus spreads' +
'Type 1.1 to return to main menu' +
'Type 1.1.13 to end'

const B = 'The virus is spread mainly from person-to-person.' +
'1. Between people who are in close contact with one another' +
'2. Through respiratory droplets produced when an infected person coughs or sneezes.' +
'3. It may be possible that a person can get COVID-19 by touching a surface or object that has the virus' + 
'on it and then touching their own mouth, nose, or possibly their eyes.' +
'Type 1.1.3(C) to learn about the symptoms' +
'Type 1.1(MENU) to return to main menu' +
'Type 1.1.1.1(Exit) to end'

const C = 'The virus is spread mainly from person-to-person.' +
'1. Between people who are in close contact with one another' +
'2. Through respiratory droplets produced when an infected person coughs or sneezes.' +
'3. It may be possible that a person can get COVID-19 by touching a surface or object that has the' + 
'virus on it and then touching their own mouth, nose, or possibly their eyes.' +
'Type 1.1.3(C) to learn about the symptoms' +
'Type 1.1(MENU) to return to main menu' +
'Type 1.1.1.1(Exit) to end'


const D = '1.1.4(D). How can I protect myself. You can protect yourself by:' + '\n' +
'-  Washing your hands with soap and running water frequently : before and after eating, after using toilet, touching animals or animal waste' +
'- Covering mouth and nose with a disposable tissue when coughing or sneezing' +
'- Avoiding close contact with anyone who shows symptoms.' +
'- Seek medical care if you have fever, cough or difficulty breathing.' +
'Type 1.1.5(E) to learn to protect others' +
'Type 1.1(MENU) to return to main menu' +
'Type 1.1.1.3(EXIT) to end'

const E = '1.1.5(E). Protecting others from getting sick.' +
'You can protect others from getting sick taking the following precautions' +
'- When coughing and sneezing, cover mouth and nose with elbow or tissue' +
'- Throw the tissue in a bin immediately after use' +
'- Clean hands with soap after coughing or sneezing' +
'- Avoid close contact when you are experiencing cough and fever' +
'- Avoid spitting in public' +
'- Seek medical care if your loved one has a fever, cough or difficulty breathing.' +
'Type 1.1.6(F) to learn about Myths about CoronaVirus' +
'Type 1.1(MENU) to return to main menu' +
'Type 1.1.1.3(EXIT) to end'

const F = '1.1.6(F). Myths about the virus' +
'What would you like to learn?' +
'1.1.6.1(A). Can pets at home spread the coronavirus?' +
'1.1.6.2(B). Does the new coronavirus affect older people, or are younger people more?' +
'1.1.6.3(C) Are antibiotics effective in preventing and treating the new coronavirus?' +
'1.1.6.4(D)Areany specific medicines to prevent or treat the new coronavirus?' +
'Type 1.1(MENU) to return to main menu' +
'Type 1.1.1.3(EXIT) to end'

const FA = 'A. Can pets at home spread the coronavirus?' +
'At present, there is no evidence that companion animals/pets such as dogs or cats can be infected' + 
'with the new coronavirus. However, it is always a good idea to wash your hands with soap and water ' + 
'after contact with pets. This protects you against various common bacteria such as E.coli and Salmonella that can pass between pets and humans.'
'Type 1.1(MENU) to return to the MAIN Menu' +
'Type 1.1.6.2(MYTH) to return to the MYTHS Men'

const FB = 'B. Does the new coronavirus affect older people, or are younger people more?' +
'People of all ages can be infected by the new coronavirus .Older people, and people with pre-existing'+ 'medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming'+ 'severely ill with the virus.' + 
'Type 1.1(MENU) to return to the MAIN Menu' +
'Type 1.1.6(MYTH) to return to the MYTHS Menu'

const FC = 'C. Are antibiotics effective in preventing and treating the new coronavirus?' +
'No, antibiotics do not work against viruses, only bacteria. The new coronavirus is a virus and,' + 'therefore, antibiotics should not be used as a means of prevention or treatment. However, if you are' + 'hospitalized you may receive antibiotics because bacterial co-infection is possible.' +
'Type MENU to return to the MAIN Menu' +
'Type MYTH to return to the MYTHS Menu'

const FD = 'D. Are there any specific medicines to prevent or treat the new coronavirus?' +
'To date, there is no specific medicine recommended to prevent or treat the new coronavirus. However,' + 
'those infected with the virus should receive appropriate care to relieve and treat symptoms, and those' + 
'with severe illness should receive optimized supportive care.' +
'Type MENU to return to the MAIN Menu' +
'Type MYTH to return to the MYTHS Menu'

const G = 'If you suspect a case of CoronaVirus, call the following numbers:' + '\n' +
'Toll-Free: 909' + '\n' +
'Mobile: +260964638726' + '\n' +
'Mobile: +260974493553' + '\n' +
'Mobile: +260953898941' + '\n' +
'Type MENU to return to the main menu'

const H = 'Zambia MOH Measures' 
1. Mandatory reporting of all individuals suspected to have COVID- 19 to health officials.
2. Mandatory quarantine of all travelers from high-risk areas for a minimum period of 14 days.
3. Mandatory isolation of all suspected and confirmed cases of COVID-19
4. Mandatory collection of all relevant specimens for diagnosis and management of COVID-19
5. Closure of any premises that pose a public health threat linked to COVID-19
6. A mandatory requirement for the provision of adequate and accessible facilities for hand hygiene at all public places'

module.exports = {
  welcome,
  mainMenu,
  no,
  A,
  B,
  
}
