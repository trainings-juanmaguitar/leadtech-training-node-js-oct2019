const psRequest = require('request-promise')
const psWriteFile = require('fs-writefile-promise')
const to = require('await-to-js').default;

const URL = 'https://baconipsum.com/api/?type=meat-and-filler&paras=20&format=json'
const FILENAME_WRITE = 'stats.txt'

function getWordsFromParagraphs(paragraphs) {
  const text = paragraphs.join(' ')
  return text.split(' ')
}

const filterWordsMoreThan5Characters = words =>
  words.filter(word => word.length >= 5)

const getStatsFrequency = words =>
  words.reduce( (acc, word) => {
    if (!acc[word]) acc[word] = 1
    else ++acc[word]
    return acc
  }, {})

const writeFileStats = async (FILENAME_WRITE, statsFrequency) => {

  const contentToWrite = JSON.stringify(statsFrequency)
  try {
    await psWriteFile(FILENAME_WRITE, contentToWrite)
    return `Stats have been written properly in ${FILENAME_WRITE}`
  }
  catch(e) {
    throw new Error(`Error writing stats in ${FILENAME_WRITE}`);
  }
}
  
  

const getHiguestFreqWord = stats =>
  Object.entries(stats).reduce( (acc, pairKeyValue) => {
    if (acc === undefined) return [...pairKeyValue]
    else if (pairKeyValue[1] > acc[1])  return [...pairKeyValue]
    return acc
  })

async function doStuff(){

  const jsonResponse = await psRequest(URL)
  const oResponse = JSON.parse(jsonResponse)
  const words = getWordsFromParagraphs(oResponse)
  const wordsWithMoreThan5Characters = filterWordsMoreThan5Characters(words)
  const statsWords = getStatsFrequency(wordsWithMoreThan5Characters)
  const [word, freq] = getHiguestFreqWord(statsWords)
  console.log(`${word} is the word that appear more times → ${freq} times`)

  const [errorWrite, successWriteMsg] = await to(writeFileStats(FILENAME_WRITE, statsFrequency))
  if (successWriteMsg) console.log(successWriteMsg)

}
  

doStuff()