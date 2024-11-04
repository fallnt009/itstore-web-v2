import Avatar from '../../../components/ui/Avatar';

export default function AuthToggle({authenUser, onClick, onHover}) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
    >
      {authenUser ? (
        <>
          <Avatar size={50} src={authenUser.profileImage} />
        </>
      ) : (
        <>
          <Avatar size={50} />
        </>
      )}
    </div>
  );
}
