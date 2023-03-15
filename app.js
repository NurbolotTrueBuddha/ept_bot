import TelegramBot from 'node-telegram-bot-api';
import cron from 'node-cron';

const token = "6095806646:AAEf6BmgwfM-i20gnkCK5SjgN0MY9ohMGcE"
const bot = new TelegramBot(token, { polling: true });

const chatId = '450797571'

const sendMessageMonday = () => {
    bot.sendMessage(chatId, `
09:00-10:20	- Экстремизм (лек) Кекиев 117
10:30-11:50 - ООП (лек) Хмелёва 308
12:10-13:30 - Физра (пр)		
13:40-15:00 - Манасовед (пр) Мусаева 117`);
};

const sendMessageTuesday = () => {
    bot.sendMessage(chatId, `
09:00-10:20 - ООП (пр)	Хмелёва 301
10:30-11:50	
числитель - Физика (пр)	Айтимбетова 412
знаменатель	- Физика (лаб) Айтимбетова 404
12:10-13:30	
числитель - Физика (лек) Айтимбетова 407`);
};
const sendMessageWednesday = () => {
    bot.sendMessage(chatId, `
07:30-08:50	- Иностранный язык (пр)		
09:00-10:20	- Иностранный язык (пр)		
10:30-11:50	- Алгоритмы (лек) Айдаркулов 308
12:10-13:30	- Алгоритмы (пр) Айдаркулов 401`);
};
const sendMessageThursday = () => {
    bot.sendMessage(chatId, `
09:00-10:20	- ТВИМС (пр) Нарматова 103
10:30-11:50	- Кыргызский (пр)		
12:10-13:30	- Физра (пр)		
13:40-15:00	- ООП (пр) Хмелёва 301`);
};
const sendMessageFriday = () => {
    bot.sendMessage(chatId, `
09:00-10:20	- Алгоритмы (пр) Айдаркулов 304
10:30-11:50	- Архитектура (лек) Осмонов 308
12:10-13:30	- Манасовед (лек) Мусаева
13:40-15:00	- Алгоритмы (лек) Айдаркулов 308`);
};
const sendMessageSaturday = () => {
    bot.sendMessage(chatId, `
07:30-08:50 - ТВИМС (лек) Джаналиева 105
09:00-10:20 - Антикоррупциz (лек) Алымкулова 117
10:30-11:50	
числитель - Архитектура (пр) Умурзакова
числитель - Архитектура Аскарбекова 304
12:10-13:30	
знаменатель - Архитектура  (пр)	Умурзакова 305
знаменатель	- Архитектура Аскарбекова 304
    `);
};

const sendMessageSunday = () => {
    bot.sendMessage(chatId, `
Хороших выходных, жанымдар `);
};

cron.schedule('0 0 * * 1', sendMessageMonday);
cron.schedule('0 0 * * 2', sendMessageTuesday)
cron.schedule('0 0 * * 3', sendMessageWednesday);
cron.schedule('0 0 * * 4', sendMessageThursday);
cron.schedule('0 0 * * 5', sendMessageFriday);
cron.schedule('0 0 * * 6', sendMessageSaturday);
cron.schedule('0 0 * * 0', sendMessageSunday);

bot.on('message', (msg) => {
    console.log(msg);
})