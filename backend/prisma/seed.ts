/**
 * По 10 записей на каждую модель.
 * Повторный запуск заменяет предыдущий сид (по email, названиям и кодам).
 * Пароль всех пользователей: seed12345
 */
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import { ERole, PrismaClient } from '../src/generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL as string,
  }),
});

const cover = (id: number) => `https://covers.openlibrary.org/b/id/${id}-L.jpg`;

const portrait = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=600`;

const userPhoto = (gender: 'men' | 'women', n: number) =>
  `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;

const genres = [
  'Мистика',
  'Психологическая проза',
  'Эпопея',
  'Антиутопия',
  'Фэнтези',
  'Магический реализм',
  'Философская сказка',
  'Социальная проза',
  'Любовный роман',
  'Притча',
];

const publishers = [
  'АСТ',
  'Эксмо',
  'Азбука',
  'Иностранка',
  'Росмэн',
  'Corpus',
  'Махаон',
  'Симпозиум',
  'Ad Marginem',
  'София',
];

const authors = [
  {
    name: 'Михаил Булгаков',
    avatar: 'https://covers.openlibrary.org/a/olid/OL52940A-L.jpg',
    bio: 'Русский писатель и драматург. «Мастер и Маргарита» писался с 1928 по 1940 год и впервые был напечатан в журнале «Москва» в 1966–1967 годах.',
  },
  {
    name: 'Фёдор Достоевский',
    avatar: portrait('Dostoevsky_1872.jpg'),
    bio: 'Русский писатель, мыслитель и публицист. «Преступление и наказание» вышло в «Русском вестнике» в 1866 году.',
  },
  {
    name: 'Лев Толстой',
    avatar: portrait('L.N.Tolstoy_Prokudin-Gorsky.jpg'),
    bio: 'Русский писатель и мыслитель. Роман-эпопея «Война и мир» публиковался в 1865–1869 годах и описывает Россию эпохи наполеоновских войн.',
  },
  {
    name: 'Джордж Оруэлл',
    avatar: portrait('George_Orwell_press_photo.jpg'),
    bio: 'Британский писатель и журналист, автор «1984» и «Скотного двора». Роман «1984» вышел в 1949 году.',
  },
  {
    name: 'Джоан Роулинг',
    avatar: 'https://covers.openlibrary.org/a/olid/OL23919A-L.jpg',
    bio: 'Британская писательница. «Гарри Поттер и философский камень» — первая книга серии, издана в 1997 году издательством Bloomsbury.',
  },
  {
    name: 'Габриэль Гарсиа Маркес',
    avatar: portrait('Gabriel_Garcia_Marquez.jpg'),
    bio: 'Колумбийский писатель, лауреат Нобелевской премии по литературе 1982 года. «Сто лет одиночества» опубликовано в 1967 году.',
  },
  {
    name: 'Антуан де Сент-Экзюпери',
    avatar: 'https://covers.openlibrary.org/a/olid/OL31901A-L.jpg',
    bio: 'Французский писатель и лётчик. «Маленький принц» написан в Нью-Йорке и издан в 1943 году, за год до гибели автора.',
  },
  {
    name: 'Харпер Ли',
    avatar: 'https://covers.openlibrary.org/a/olid/OL498120A-L.jpg',
    bio: 'Американская писательница. «Убить пересмешника» вышел в 1960 году и получил Пулитцеровскую премию.',
  },
  {
    name: 'Джейн Остин',
    avatar: 'https://covers.openlibrary.org/a/olid/OL21594A-L.jpg',
    bio: 'Английская романистка. «Гордость и предубеждение» опубликовано в 1813 году и остаётся самым известным её романом.',
  },
  {
    name: 'Пауло Коэльо',
    avatar: portrait('Paulo_Coelho_nrkbeta.jpg'),
    bio: 'Бразильский писатель. «Алхимик» впервые вышел в 1988 году небольшим тиражом и позже стал одной из самых продаваемых книг в мире.',
  },
];

const books = [
  {
    title: 'Мастер и Маргарита',
    description:
      'Роман о визите Воланда в Москву 1930-х, истории Понтия Пилата и любви Мастера и Маргариты. Булгаков соединяет сатиру на литературный быт, евангельскую линию и фантастику.',
    year: 1967,
    pages: 480,
    preview: cover(12947486),
    tags: ['мистика', 'Москва', 'сатира'],
  },
  {
    title: 'Преступление и наказание',
    description:
      'Родион Раскольников убивает старуху-процентщицу, проверяя теорию о «праве имеющих». Петербург, нищета и Соня Мармеладова ведут его к признанию.',
    year: 1866,
    pages: 608,
    preview: cover(9411873),
    tags: ['Петербург', 'совесть', 'классика'],
  },
  {
    title: 'Война и мир',
    description:
      'Эпопея о семьях Болконских, Безуховых и Ростовых на фоне войн 1805–1812 годов. Толстой показывает Бородинское сражение, пожар Москвы и частную жизнь рядом с историей.',
    year: 1869,
    pages: 1225,
    preview: cover(12621906),
    tags: ['история', 'Россия', 'Наполеон'],
  },
  {
    title: '1984',
    description:
      'Уинстон Смит служит в Министерстве правды в Океании, где партия переписывает прошлое. Роман о слежке, новоязе и том, как власть уничтожает саму возможность несогласия.',
    year: 1949,
    pages: 328,
    preview: cover(9267242),
    tags: ['тоталитаризм', 'слежка', 'антиутопия'],
  },
  {
    title: 'Гарри Поттер и философский камень',
    description:
      'Сирота Гарри узнаёт, что он волшебник, и едет в Хогвартс. Первая книга о дружбе с Роном и Гермионой, тайне философского камня и лорде Волан-де-Морте.',
    year: 1997,
    pages: 399,
    preview: cover(15155833),
    tags: ['Хогвартс', 'магия', 'дружба'],
  },
  {
    title: 'Сто лет одиночества',
    description:
      'Сага о семи поколениях семьи Буэндиа в вымышленном Макондо. Маркес начинает с дня, когда полковник Аурелиано Буэндиа ребёнком увидел лёд, и доводит род до последнего из Буэндиа.',
    year: 1967,
    pages: 416,
    preview: cover(12627383),
    tags: ['Макондо', 'семья', 'одиночество'],
  },
  {
    title: 'Маленький принц',
    description:
      'Лётчик встречает в пустыне мальчика с астероида B-612. Притча о розе, Лисе и ответственности: «мы в ответе за тех, кого приручили».',
    year: 1943,
    pages: 96,
    preview: cover(10708272),
    tags: ['притча', 'детство', 'пустыня'],
  },
  {
    title: 'Убить пересмешника',
    description:
      'В алабамском Мейкомбе адвокат Аттикус Финч защищает чернокожего Тома Робинсона. История рассказана его дочерью Скаут и говорит о предрассудках и порядочности.',
    year: 1960,
    pages: 336,
    preview: cover(14351077),
    tags: ['суд', 'Алабама', 'справедливость'],

  },
  {
    title: 'Гордость и предубеждение',
    description:
      'Элизабет Беннет и мистер Дарси плохо понимают друг друга с первой встречи. Роман Остин о браке, сословиях и о том, как меняется мнение, когда люди видят друг друга яснее.',
    year: 1813,
    pages: 416,
    preview: cover(14348537),
    tags: ['Англия', 'брак', 'ирония'],
  },
  {
    title: 'Алхимик',
    description:
      'Андалусский пастух Сантьяго видит сон о кладе у египетских пирамид и уходит из родного села. По пути он встречает царя Мельхиседека, англичанина и алхимика.',
    year: 1988,
    pages: 192,
    preview: cover(7414780),
    tags: ['путешествие', 'мечта', 'пустыня'],
  },
];

const users = [
  {
    firstname: 'Анна',
    lastname: 'Соколова',
    username: 'anna_sokolova',
    email: 'anna@mezdustrok.local',
    bio: 'Веду библиотеку проекта и читаю русскую классику.',
    avatar: userPhoto('women', 12),
    role: ERole.ADMIN,
  },
  {
    firstname: 'Иван',
    lastname: 'Петров',
    username: 'ivan_petrov',
    email: 'ivan@mezdustrok.local',
    bio: 'Перечитываю Достоевского каждую зиму.',
    avatar: userPhoto('men', 32),
    role: ERole.USER,
  },
  {
    firstname: 'Мария',
    lastname: 'Орлова',
    username: 'maria_orlova',
    email: 'maria@mezdustrok.local',
    bio: 'Люблю толстые романы и пометки на полях.',
    avatar: userPhoto('women', 44),
    role: ERole.USER,
  },
  {
    firstname: 'Дмитрий',
    lastname: 'Волков',
    username: 'dmitry_volkov',
    email: 'dmitry@mezdustrok.local',
    bio: 'Собираю антиутопии и научно-популярные книги.',
    avatar: userPhoto('men', 45),
    role: ERole.USER,
  },
  {
    firstname: 'Елена',
    lastname: 'Смирнова',
    username: 'elena_smirnova',
    email: 'elena@mezdustrok.local',
    bio: 'Читаю фэнтези вместе с дочерью.',
    avatar: userPhoto('women', 65),
    role: ERole.USER,
  },
  {
    firstname: 'Сергей',
    lastname: 'Кузнецов',
    username: 'sergey_kuznetsov',
    email: 'sergey@mezdustrok.local',
    bio: 'Латиноамериканская проза и длинные выходные.',
    avatar: userPhoto('men', 22),
    role: ERole.USER,
  },
  {
    firstname: 'Ольга',
    lastname: 'Новикова',
    username: 'olga_novikova',
    email: 'olga@mezdustrok.local',
    bio: 'Держу на полке «Маленького принца» с детства.',
    avatar: userPhoto('women', 21),
    role: ERole.USER,
  },
  {
    firstname: 'Павел',
    lastname: 'Морозов',
    username: 'pavel_morozov',
    email: 'pavel@mezdustrok.local',
    bio: 'Юрист, который читает романы о судах.',
    avatar: userPhoto('men', 51),
    role: ERole.USER,
  },
  {
    firstname: 'Наталья',
    lastname: 'Егорова',
    username: 'natalia_egorova',
    email: 'natalia@mezdustrok.local',
    bio: 'Английский роман XIX века — мой основной жанр.',
    avatar: userPhoto('women', 17),
    role: ERole.USER,
  },
  {
    firstname: 'Алексей',
    lastname: 'Лебедев',
    username: 'alexey_lebedev',
    email: 'alexey@mezdustrok.local',
    bio: 'Беру в дорогу короткие притчи и записные книжки.',
    avatar: userPhoto('men', 11),
    role: ERole.USER,
  },
];


const quotes = [
  'Рукописи не горят.',
  'Тварь ли я дрожащая или право имею?',
  'Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.',
  'Кто управляет прошлым, тот управляет будущим. Кто управляет настоящим, тот управляет прошлым.',
  'Не стоит зацикливаться на мечтах и забывать жить.',
  'Много лет спустя, перед самым расстрелом, полковник Аурелиано Буэндиа припомнит тот далёкий день, когда отец повёл его смотреть на лёд.',
  'Зорко одно лишь сердце. Самого главного глазами не увидишь.',
  'Мужество — это когда знаешь заранее, что ты проиграл, и всё равно берёшься за дело и наперекор всему на свете идёшь до конца.',
  'Холостяк, обладающий приличным состоянием, должен испытывать недостаток в жене: таково всеобщее мнение.',
  'Когда ты чего-то сильно хочешь, вся Вселенная будет способствовать тому, чтобы твоё желание сбылось.',
];



async function resetPreviousSeed() {
  const titles = books.map((book) => book.title);
  const authorNames = authors.map((author) => author.name);
  const emails = users.map((user) => user.email);

  const existingBooks = await prisma.book.findMany({
    where: { title: { in: titles } },
    select: { id: true },
  });
  const bookIds = existingBooks.map((book) => book.id);

  if (bookIds.length) {
    await prisma.reviewLike.deleteMany({
      where: { review: { bookId: { in: bookIds } } },
    });
    await prisma.review.deleteMany({ where: { bookId: { in: bookIds } } });
    await prisma.quote.deleteMany({ where: { bookId: { in: bookIds } } });
    await prisma.favorite.deleteMany({ where: { bookId: { in: bookIds } } });
    await prisma.book.deleteMany({ where: { id: { in: bookIds } } });
  }

  const existingAuthors = await prisma.author.findMany({
    where: { name: { in: authorNames } },
    select: { id: true },
  });
  const authorIds = existingAuthors.map((author) => author.id);

  if (authorIds.length) {
    await prisma.favorite.deleteMany({
      where: { authorId: { in: authorIds } },
    });
    await prisma.author.deleteMany({ where: { id: { in: authorIds } } });
  }

  await prisma.favorite.deleteMany({
    where: { user: { email: { in: emails } } },
  });
  await prisma.reviewLike.deleteMany({
    where: { user: { email: { in: emails } } },
  });
  await prisma.quote.deleteMany({
    where: { author: { email: { in: emails } } },
  });
  await prisma.review.deleteMany({
    where: { user: { email: { in: emails } } },
  });
  await prisma.user.deleteMany({ where: { email: { in: emails } } });

  await prisma.genre.deleteMany({
    where: { name: { in: genres }, books: { none: {} } },
  });
  await prisma.publisher.deleteMany({
    where: { name: { in: publishers }, books: { none: {} } },
  });
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL не задан');
  }

  const password = bcrypt.hashSync('seed12345', 10);

  await resetPreviousSeed();

  const createdUsers = await Promise.all(
    users.map((user) => prisma.user.create({ data: { ...user, password } })),
  );

  const createdGenres = await Promise.all(
    genres.map((name) => prisma.genre.create({ data: { name } })),
  );

  const createdPublishers = await Promise.all(
    publishers.map((name) => prisma.publisher.create({ data: { name } })),
  );

  const createdAuthors = await Promise.all(
    authors.map((author) => prisma.author.create({ data: author })),
  );

  const createdBooks = await Promise.all(
    books.map((book, index) =>
      prisma.book.create({
        data: {
          ...book,
          authorId: createdAuthors[index].id,
          genreId: createdGenres[index].id,
          publisherId: createdPublishers[index].id,
        },
      }),
    ),
  );



  

  await Promise.all(
    quotes.map((quote, index) =>
      prisma.quote.create({
        data: {
          quote,
          bookId: createdBooks[index].id,
          authorId: createdUsers[(index + 1) % createdUsers.length].id,
        },
      }),
    ),
  );




  const counts = {
    users: createdUsers.length,
    authors: createdAuthors.length,
    genres: createdGenres.length,
    publishers: createdPublishers.length,
    books: createdBooks.length,
    quotes: quotes.length,
    favorites: createdUsers.length,
  };

  console.log('Сид записан:', counts);
  console.log(
    'Вход: anna@mezdustrok.local / seed12345 (админ), остальные пользователи с тем же паролем',
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
