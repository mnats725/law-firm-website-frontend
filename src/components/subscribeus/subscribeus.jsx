import "./subscribeus.css";

export const SubscribeUs = () => {
  return (
    <div className="subscribeus-container">
      <div className="subscribeus">
        <h2>Будьте в курсе</h2>
        <h1><span>Подпишитесь</span>На наши новости</h1>
        <h3>Чтобы всегда быть вкурсе дел и обновления законов</h3>
        <div className="e-mail">
          <imput
          placeholder="+7 (___) ___ __ __"
          type="e-mail"
          name="e-mail_client">Ваш e-mail</imput>
          <button>Подписаться</button>
        </div>
      </div>
    </div>
  );
};
