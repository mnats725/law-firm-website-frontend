import "./subscribeus.css";

import { EMail } from "./e-mail";

export const SubscribeUs = () => {
  return (
    <div className="subscribeus-container">
      <div className="subscribeus">
        <h2>Будьте в курсе</h2>
        <h1>
          <span>Подпишитесь</span>На наши новости
        </h1>
        <h3>Чтобы всегда быть вкурсе дел и обновления законов</h3>
        <EMail />
      </div>
    </div>
  );
};
