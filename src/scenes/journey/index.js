import { Reference, Word } from "components/verse";
import { Wrapper } from "components/wrapper";

export const Journey = () => {
  return (
    <Wrapper>
      <Word verse={"Matt 18:20, NIV"}>
        Jesus said “For where two or three gather in my name, there am I with
        them.”
      </Word>
      <p>
        In 2016, a small group of believers (Dunedin Prayer Warriors) came
        together fortnightly to pray and seek the Lord, by the initiative of a
        humble believer Bro Rumesh. By the grace of God, this is a public church
        since April 2025,{" "}
        <em>a planting of the Lord, for the display of His splendor</em>{" "}
        <Reference
          verse={
            <>
              and provide for those who grieve in Zion— to bestow on them a
              crown of beauty instead of ashes, the oil of joy instead of
              mourning, and a garment of praise instead of a spirit of despair.
              They will be called oaks of righteousness, a planting of the Lord
              for the display of his splendor.
            </>
          }>
          (Isa 61:3, NIV)
        </Reference>
        .
      </p>
      <p>
        Over the past nine years, God's mighty hand was over this prayer
        fellowship where all faithful people were drawn closer to Him; there was
        a hunger and thirst for God. There were times of failures, struggles,
        persecutions, trials and testing - but in all of these the power and
        presence of God was tangible.
      </p>
      <p>
        During this time, The fellowship grew stronger in the Word of God
        through His Holy Spirit, and God's love was poured out into the hearts
        of the members. There were regular family retreats connecting with wider
        communities. These retreats played a significant role in the spiritual
        growth of the believers.
      </p>
    </Wrapper>
  );
};
