import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv'; 
dotenv.config();
// const botToken = process.env.TELEGRAM_BOT_TOKEN;
const botToken =  process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken);

export async function POST(req, res) {
//const chatId = process.env.TELEGRAM_CHAT_ID;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const { name,  phone } = await req.json();
  const telegramMessage = `Name: ${name}\nPhone: ${phone}`;

  try {
    await bot.sendMessage(chatId, telegramMessage);
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}