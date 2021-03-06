import React from "react";

function About() {
  return (
    <div>
      <h1 className="mb-4">Описание</h1>
      <div className="lead">
        <p>
          Необходимо разработать приложение - список задач с помидоро-таймером.
        </p>
        <p>В основе приложения лежит обычный список задач. </p>
        <p>Пользователь может:</p>
        <ul>
          <li>добавлять задачи,</li>
          <li>удалять,</li>
          <li>помечать как выполненные.</li>
        </ul>
        <p>
          Отличительной особенностью приложения является возможность выбрать
          активную задачу и запустить для нее помидорный таймер, а также
          отслеживание количества помидоров, потраченных на каждую задачу.
        </p>
        <p>
          Подробнее про метод &laquo;Помидора&raquo;{" "}
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0"
            target="_blank"
          >
            тут
          </a>
        </p>
        <p>P.S. можно использовать любые библиотеки и фреймворки по желанию.</p>
      </div>
    </div>
  );
}

export default About;
