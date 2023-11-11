import "./e-mail.css";

export const EMail = () => {
  return (
    <div className="e-mail">
      <imput placeholder="e-mail" type="e-mail" name="e-mail_client">
        Ваш e-mail
      </imput>
      <button>Подписаться</button>
    </div>
  );
};
