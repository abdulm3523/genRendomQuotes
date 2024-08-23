/**
 * DATE: 22-08-2024
 * GENERATE RANDOM QUOTE FROM AN ARRAY
 * AUTHOR: ABDUL MALIK
 */

window.onload = ()=>{
    // main()
}

const prophetQuotes = [
    "The best among you are those who have the best manners and character.",
    "None of you truly believes until he loves for his brother what he loves for himself.",
    "The strong person is not the one who can throw his opponent to the ground. The strong person is the one who can control himself when he is angry.",
    "Seek knowledge from the cradle to the grave.",
    "God does not look at your appearance or your wealth but looks at your heart and your actions.",
    "Do not waste water, even if performing ablution on the banks of a fast-flowing river.",
    "He who has been a ruler over ten people will be brought shackled on the Day of Resurrection until justice loosens his chains or tyranny brings him to destruction.",
    "The best of you is he who is best to his family, and I am the best among you to my family.",
    "A believer is not stung twice from the same hole.",
    "When a man dies, his deeds come to an end except for three things: Sadaqah Jariyah (continuous charity); knowledge which is beneficial; or a virtuous descendant who prays for him.",
    "The best charity is that given by one who has little.",
    "The greatest Jihad is to battle your own soul, to fight the evil within yourself.",
    "The best richness is the richness of the soul.",
    "He who eats with his servant, rides the donkey in the market, and ties his goat, let no one think this person is arrogant.",
    "He is not a believer whose stomach is filled while his neighbor goes hungry.",
    "The best of houses is the house where an orphan gets love and kindness.",
    "Whoever does not show mercy will not be shown mercy.",
    "The believer does not slander, curse, speak obscenely, or speak rudely.",
    "Do not be people without minds of your own, saying that if others treat you well you will treat them well, and that if they do wrong you will do wrong. Instead, accustom yourselves to do good if people do good, and not to do wrong if they do evil.",
    "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife.",
    "There is a reward for kindness to every living thing.",
    "Whoever is kind, God will be kind to him; therefore, be kind to man on the earth. He who is in heaven will show mercy on you.",
    "Riches are not from an abundance of worldly goods but from a contented mind.",
    "Kindness is a mark of faith, and whoever is not kind has no faith.",
    "He who has a slave girl, educates her, and treats her with kindness, and then sets her free and marries her, will have a double reward.",
    "No two things have been combined better than knowledge and patience.",
    "He who does not thank people does not thank God.",
    "The seeking of knowledge is obligatory for every Muslim.",
    "He who is not merciful to others, will not be treated mercifully.",
    "The best of people are those who are most beneficial to others.",
    "He who travels in the search of knowledge, to him God shows the way of Paradise.",
    "When someone performs a job for you, pay them their wage before their sweat dries.",
    "The strong man is not the good wrestler; the strong man is only the one who controls himself when he is angry.",
    "God is kind and likes kindness in all things.",
    "The one who looks after and works for a widow and for a poor person is like a warrior fighting for God's cause.",
    "The best word is the Word of God, and the best guidance is the guidance of Muhammad.",
    "It is not permissible for a man to hold a grudge against his brother for more than three days.",
    "Modesty is part of faith.",
    "Whoever believes in God and the Last Day should speak good or keep silent.",
    "Whoever does not show mercy will not be shown mercy.",
    "No one can be given a blessing better and greater than patience.",
    "A true Muslim is one from whose tongue and hand other Muslims are safe.",
    "Shall I not tell you about the one who is better than fasting, prayer, and charity? It is to reconcile between people.",
    "The best of people are those who are best to their wives.",
    "Smiling in your brother's face is an act of charity.",
    "The best of the people is he who is the most beneficial to them.",
    "The best among you are those who have the best manners and character.",
    "The best deed is the one that is most consistent, even if it is small.",
    "The best form of worship is patience.",
    "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife.",
    "If you want to soften your heart, feed the poor and care for the orphan.",
    "He who does not thank people does not thank God.",
    "Whoever has faith in God and the Last Day, let him speak good or remain silent.",
    "The best among you are those who have the best manners and character.",
    "The strong man is not the one who overpowers others, but the one who controls himself in anger.",
    "The most beloved of people according to God is he who brings most benefit to people.",
    "The best of you is he who is best to his family.",
    "The best richness is the richness of the soul.",
    "The believer is not the one who eats his fill while his neighbor is hungry.",
    "The best of people are those who are most beneficial to others.",
    "The most beloved of deeds to God are those that are most consistent, even if they are small.",
    "He who does not show mercy will not be shown mercy.",
    "The best of you is he who is best to his family.",
    "Whoever is kind, God will be kind to him; therefore, be kind to man on the earth.",
    "The strong man is not the one who overpowers others, but the one who controls himself in anger.",
    "The best charity is that given by one who has little.",
    "A good word is charity.",
    "The believer does not slander, curse, speak obscenely, or speak rudely.",
    "The best of houses is the house where an orphan gets love and kindness.",
    "The best word is the Word of God, and the best guidance is the guidance of Muhammad.",
    "The best deed is the one that is most consistent, even if it is small.",
    "Modesty is part of faith.",
    "Whoever believes in God and the Last Day should speak good or keep silent.",
    "The best richness is the richness of the soul.",
    "The best of the people is he who is the most beneficial to them.",
    "He who has been a ruler over ten people will be brought shackled on the Day of Resurrection until justice loosens his chains or tyranny brings him to destruction.",
    "The strong person is not the one who can throw his opponent to the ground. The strong person is the one who can control himself when he is angry.",
    "The best word is the Word of God, and the best guidance is the guidance of Muhammad.",
    "The best of houses is the house where an orphan gets love and kindness.",
    "The best of people are those who are best to their wives.",
    "The believer is not the one who eats his fill while his neighbor is hungry.",
    "The best charity is that given by one who has little.",
    "The best of you is he who is best to his family.",
    "A believer is not stung twice from the same hole.",
    "The best of you is he who is best to his family, and I am the best among you to my family.",
    "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife.",
    "The best of people are those who are most beneficial to others.",
    "The best deed is the one that is most consistent, even if it is small.",
    "The best charity is that given by one who has little.",
    "The strong man is not the one who overpowers others, but the one who controls himself in anger.",
    "Whoever has faith in God and the Last Day, let him speak good or remain silent.",
    "The best charity is that given by one who has little.",
    "A good word is charity.",
    "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife.",
    "The best of people is he who is the most beneficial to them.",
    "The believer does not slander, curse, speak obscenely, or speak rudely.",
    "The best richness is the richness of the soul.",
    "The best deed is the one that is most consistent, even if it is small."
  ];
  
const copyQuote = document.getElementById('copyQuote')
const generateBtn = document.getElementById('generateQuoteBtn')
const quotesDisplay = document.getElementById('displayQuotes')

generateBtn.addEventListener('click',function(){
    const index = Math.floor(Math.random()*99)
    const quots = prophetQuotes[index]
    quotesDisplay.innerHTML = quots
})

copyQuote.addEventListener('click',copyCode)

// Copy event

function copyCode() {
    navigator.clipboard.writeText(quotesDisplay.innerHTML)
}