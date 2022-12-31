import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile("messages.json", "utf-8");
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile("messages.json", "utf-8");
    return JSON.parse(contents);
  }

  async create(content: string) {
    const contents = await readFile("messages.json", "utf-8");
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 900);
    messages[id] = { id, content };
    console.log(messages);
    await writeFile("messages.json", JSON.stringify(messages));
  }
}