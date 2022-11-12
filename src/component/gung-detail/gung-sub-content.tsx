import { GungInfo } from '../../interface/gung';

type SubContentProps = {
  data: GungInfo;
};

function SubContent({ data }: SubContentProps) {
  return (
    <div className="d-s-container">
      <div className="d-s-context" key="data.imageIndex">
        <h4 className="d-title">{data.imageContentsKor}</h4>
        <div className="d-text">
          <p>{data.imageContentsChi}</p>
          <p>{data.imageIndex[0]}</p>
          <p>{data.imageExplanationKor[0]}</p>
        </div>
      </div>
      <p className="d-s-img">
        <img src={data.imageUrl[0]} alt="출처:문화재청" />
      </p>
    </div>
  );
}

export default SubContent;
