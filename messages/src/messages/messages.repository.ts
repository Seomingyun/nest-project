import { readFile, writeFile } from 'fs/promises';

// 항상 messages.json이 존재한다는 가정 하에 진행
export class MessagesRepository {
  async findOne(id: string) {
    // 1. 파일의 콘텐츠 읽기
    const contents = await readFile('messages.json', 'utf8'); // utf8 인코딩 사용

    // 2. 파싱해서 객체로 만들기
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    // 1. id 생성
    const id = Math.floor(Math.random() * 999); // 무작위 id

    // 2. 메시지 객체 만들기 (ex. 50: {id:50, content: message} 형택)
    messages[id] = { id, content };

    // 3. 스트링으로 만들어서 넣기
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
