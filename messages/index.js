import axios from 'axios';

const welcome = 'Hey there, Have you heard about Coronavirus? It is a new respiratory virus which is' +
  'spreading fast around the world. More than 540, 000 people are known to be infected and at least 24, 000 deaths' +
  ' have been recorded worldwide (As of 27-03-2020). Would you like to receive useful information from' +
  'Ministry of Health, WHO, IFRC and UNICEF on how to prevent it? Please reply with "yes" to continue or "no" to stop.'

const mainMenu = 'Thank you. What would you like to learn?' + '\n' +
  'Reply with the number of the topic you which to get more information about.' + '\n\n' +
  '1 What is Coronavirus?' + '\n' +
  '2 How does the virus spread' + '\n' +
  '3 What are the symptoms of Coronavirus' + '\n' +
  '4 How can I protect myself' + '\n' +
  '5 Protecting others from getting sick' + '\n' +
  '6 Myths about the virus' + '\n' +
  '7 Hot Lines' + '\n' +
  '8 Zambian Measures currently in place' + '\n\n' +
  '9 What are the numbers in Zambia' + '\n' +
  'Reply with 0 to view this menu again'

const no = 'Thank you, you can always come back for more information by sending the word "Corona".' +
  ' Stay safe and have a nice day'

const one = 'Coronavirus is a new respiratory virus that has not been previously identified in humans.' +
  'The first case of the virus has been identified in Wuhan, Hubei Province, China.' +
  'United Nations, Public health officials and partners are working hard to identify the source of the virus.' +
  'Coronaviruses are a large family of viruses, some causing illness in people and others that circulate' +
  ' among animals, including camels, cats and bats.' + '\n\n' +
  'Reply with 2 to learn about how the virus spreads' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const two = 'The virus is spread mainly from person-to-person.' + '\n' +
  '1. Between people who are in close contact with one another' + '\n' +
  '2. Through respiratory droplets produced when an infected person coughs or sneezes.' + '\n' +
  '3. It may be possible that a person can get COVID-19 by touching a surface or object that has the virus' +
  'on it and then touching their own mouth, nose, or possibly their eyes.' + '\n\n' +
  'Reply with 3 to learn about the symptoms' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const three = 'What are the symptoms of Coronavirus' + '\n' +
  'Common signs of Coronavirus infection include fever, cough, shortness of breath and breathing difficulties.' + '\n' +
  'In severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.' + '\n\n' +
  'Reply with 4 to learn how to protect yourself' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const four = ' How can I protect myself. You can protect yourself by:' + '\n' +
  '-  Washing your hands with soap and running water frequently : before and after eating, after using toilet, touching animals or animal waste' + '\n' +
  '- Covering mouth and nose with a disposable tissue when coughing or sneezing' + '\n' +
  '- Avoiding close contact with anyone who shows symptoms.' + '\n' +
  '- Seek medical care if you have fever, cough or difficulty breathing.' + '\n\n' +
  'Reply with 5 to learn to protect others' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const five = 'Protecting others from getting sick.' + '\n' +
  'You can protect others from getting sick taking the following precautions' + '\n' +
  '- When coughing and sneezing, cover mouth and nose with elbow or tissue' + '\n' +
  '- Throw the tissue in a bin immediately after use' + '\n' +
  '- Clean hands with soap after coughing or sneezing' + '\n' +
  '- Avoid close contact when you are experiencing cough and fever' + '\n' +
  '- Avoid spitting in public' + '\n' +
  '- Seek medical care if your loved one has a fever, cough or difficulty breathing.' + '\n\n' +
  'Reply with 6 to learn on Myths about CoronaVirus' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const six = 'Myths about the virus' + '\n' +
  'What would you like to learn?' + '\n' +
  '3 Can pets at home spread the coronavirus?' + '\n' +
  '4 Does the new coronavirus affect older people, or are younger people more?' + '\n' +
  '5 Are antibiotics effective in preventing and treating the new coronavirus?' + '\n' +
  '6 Are any specific medicines to prevent or treat the new coronavirus?' + '\n\n' +
  'Reply with 2 to go back to the myths menu' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const sixThree = 'Can pets at home spread the coronavirus?' +
  'At present, there is no evidence that companion animals/pets such as dogs or cats can be infected' +
  'with the new coronavirus. However, it is always a good idea to wash your hands with soap and water ' +
  'after contact with pets. This protects you against various common bacteria such as E.coli and Salmonella that can pass between pets and humans.' + '\n\n' +
  'Reply with 2 to go back to the myths menu' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const sixFour = 'Does the new coronavirus affect older people, or are younger people more?' + '\n' +
  'People of all ages can be infected by the new coronavirus .Older people, and people with pre-existing' +
  'medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming' +
  'severely ill with the virus.' + '\n\n' +
  'Reply with 2 to go back to the myths menu' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const sixFive = 'Are antibiotics effective in preventing and treating the new coronavirus?' +
  'No, antibiotics do not work against viruses, only bacteria. The new coronavirus is a virus and,' + 'therefore, antibiotics should not be used as a means of prevention or treatment. However, if you are' + 'hospitalized you may receive antibiotics because bacterial co-infection is possible.' +
  'Reply with 2 to go back to the myths menu' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const sixSix = 'Are there any specific medicines to prevent or treat the new coronavirus?' +
  'To date, there is no specific medicine recommended to prevent or treat the new coronavirus. However,' +
  'those infected with the virus should receive appropriate care to relieve and treat symptoms, and those' +
  'with severe illness should receive optimized supportive care.' + '\n\n' +
  'Reply with 2 to go back to the myths menu' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const seven = 'If you suspect a case of CoronaVirus, call the following numbers:' + '\n' +
  'Toll-Free: 909' + '\n' +
  'Mobile: +260964638726' + '\n' +
  'Mobile: +260974493553' + '\n' +
  'Mobile: +260953898941' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const eight = 'Zambia MOH Measures' + '\n' +
  '1. Mandatory reporting of all individuals suspected to have COVID- 19 to health officials.' + '\n' +
  '2. Mandatory quarantine of all travelers from high-risk areas for a minimum period of 14 days.' + '\n' +
  '3. Mandatory isolation of all suspected and confirmed cases of COVID-19' + '\n' +
  '4. Mandatory collection of all relevant specimens for diagnosis and management of COVID-19' + '\n' +
  '5. Closure of any premises that pose a public health threat linked to COVID-19' + '\n' +
  '6. A mandatory requirement for the provision of adequate and accessible facilities for hand hygiene at all public places' + '\n\n' +
  'Reply with 2 to read more' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const eightOne = '7.  A requirement for all public places including schools and training institutions.' + '\n' +
  '8.  School authorities, leaders of religious institutions, employers and community leaders are required to' +
  'disseminate information on health practices.' + '\n' +
  '9. Restriction of close personal contact such as handshakes and hugs, particularly in congregate settings such' +
  'as schools, offices, places of worship, and others.' + '\n' +
  '10. Social distancing of at least one meter is encouraged when an individual is showing respiratory symptoms such' +
  'as cough and/or sneezing. Individuals showing such symptoms are urged to stay at home and avoid interacting with the public.' + '\n\n' +
  'Reply with 2 to read more' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const eightTwo = '11. Restriction of unnecessary public gatherings' + '\n' +
  '12. Restriction of non-essential foreign travel' + '\n' +
  '13. Mandatory cleaning of surroundings and proper management of' + '\n' +
  'waste within communities, trading places, and other public places.' + '\n\n' +
  'Reply with 2 to read more' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const eightThree = '14. Mandatory screening of international travelers including truckers, bus operators, and passengers' +
  'at points of entry, bus stations and other check points that may be set up from time to time.' + '\n' +
  '15. Mandatory screening of international travelers including truckers, bus operators, and passengers at points of' +
  'entry, bus stations and other check points that may be set up from time to time.' + '\n\n' +
  'Reply with 2 to read more' + '\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const eightFour = '16. Authorities at all points of entry, including airports, harbours, railway stations and ground crossings' +
  'are required to put in place all necessary provisions to promote hygiene and facilitate infection prevention' +
  'and control during passenger transit and transfer.' + '\n' +
  '17. Operators of passenger vehicles, aeroplanes, marine transport, and other conveyances are required to put' +
  'in place all necessary provisions to promote hygiene and facilitate infection prevention and control during operations.' +
  'This includes provision of health information on COVID-19 and other health matters. In addition, transport operators' +
  'are required to submit all relevant information and documentation that may be useful in detection and management of COVID-19.' + '\n\n' +
  '1 to return to main menu' + '\n' +
  'and 0 to end'

const nine = async () => {
  const res = await axios.get('https://corona.lmao.ninja/countries/zambia')
  const { cases, todayCases, deaths, todaDeaths, recovered, active } = res.data
  const response = `The total number of cases in Zambia is ${cases}, of these ${recovered} have recovered and ${deaths} have died.` + '\n' +
    `Today there are ${todayCases} new case(s) and ${todaDeaths} new death(s)` + '\n' +
    `There are ${active} active cases`

  return response
}

const sorry = 'Sorry, I didnt get that. Send 0 for Menu'

module.exports = {
  welcome,
  mainMenu,
  no,
  one,
  two,
  three,
  four,
  five,
  six,
  sixThree,
  sixFour,
  sixFive,
  sixSix,
  seven,
  eight,
  eightOne,
  eightTwo,
  eightThree,
  eightFour,
  nine,
  sorry
}
