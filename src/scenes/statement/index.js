import { Heading } from "components/typography";
import { Reference } from "components/verse";
import { Wrapper } from "components/wrapper";

const STATEMENTS = [
  {
    text: (
      <p>
        The Bible (66 books) is the inspired and infallible Word of God and all
        scriptures are God breathed which is for correction, rebuking,
        encouragement and for training in righteousness{" "}
        <Reference
          verse={
            <>
              All Scripture is God-breathed and is useful for teaching,
              rebuking, correcting and training in righteousness,
            </>
          }>
          (2 Tim 3:16)
        </Reference>
        . Therefore, the word of God is the supreme authority - above all
        traditions and any man's words.
      </p>
    ),
  },
  {
    text: (
      <p>
        There is one true God who exists eternally in three Persons: the Father,
        the Son, and the Holy Spirit. Each of them are co-equal and co-eternal (
        <Reference
          verse={
            <>
              Therefore go and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit,
            </>
          }>
          Matthew 28:19
        </Reference>
        ;{" "}
        <Reference verse={<>For there are three that testify:</>}>
          1 John 5:7
        </Reference>
        ).
      </p>
    ),
  },
  {
    text: (
      <p>
        Jesus Christ, God revealed in the flesh, is the only begotten Son of God
        and God the Son from eternity (
        <Reference
          verse={
            <>
              For to us a child is born, to us a son is given, and the
              government will be on his shoulders. And he will be called
              Wonderful Counselor, Mighty God, Everlasting Father, Prince of
              Peace.
            </>
          }>
          Isaiah 9:6
        </Reference>
        ;{" "}
        <Reference
          verse={
            <>
              1 In the beginning was the Word, and the Word was with God, and
              the Word was God.
              <br />
              14 The Word became flesh and made his dwelling among us. We have
              seen his glory, the glory of the one and only Son, who came from
              the Father, full of grace and truth.
            </>
          }>
          John 1:1, 14
        </Reference>
        ). We affirm His virgin birth, sinless life, sacrificial death, bodily
        resurrection, His ascension to the Father and His promised return in
        power and glory (second coming of Christ).
      </p>
    ),
  },
  {
    text: (
      <p>
        God created man in His own image and He created them as male & female.
        Marriage is a God ordained covenantal relationship between one man and
        one woman.
      </p>
    ),
  },
  {
    text: (
      <p>
        All humans are spiritually dead in their sin and completely lost, and
        the only way to receive forgiveness is through repentance and faith in
        the death and resurrection of our Lord Jesus Christ (Genesis 1:26-31,
        3:1-7; Romans 5:12-21).
      </p>
    ),
    subtexts: [
      {
        text: (
          <p>
            The only hope for humanity’s redemption is through the shed blood of
            Jesus Christ. On the cross, Jesus took on sin and sickness,
            providing salvation and healing for all people (Psalm 103:3). This
            salvation is received by believing in your heart that God raised
            Jesus from the dead and confessing with your mouth that Jesus is
            Lord (Romans 3:24; 10:8-10; Ephesians 2:8).
          </p>
        ),
      },
      {
        text: (
          <p>
            The inward evidence for the believer is the direct witness of the
            Holy Spirit (Romans 8:16). The outward evidence to others is a life
            marked by true holiness and love (1 John 3:23; John 13:35).
          </p>
        ),
      },
      {
        text: (
          <p>
            Salvation comes through faith in Jesus Christ, not by human works;
            however, our works are the evidence of our faith that will glorify
            God. (Acts 16:31; Romans 10:9-10; 14:10-12; 2 Corinthians 5:10;
            Ephesians 2:8-9; Titus 3:5-7; James 2:18).
          </p>
        ),
      },
    ],
  },
  {
    text: (
      <p>
        Water baptism and the Lord’s Supper are the only sacraments of the new
        covenant Church. Baptism is a public declaration that a believer has
        died with Christ and been raised with Him to live a new life (Matthew
        28:19; Acts 10:47-48; Romans 6:4). The Lord’s Supper, through the eating
        of bread and drinking from the cup, serves as a remembrance of Jesus’
        redemptive work on the cross (1 Corinthians 11:24-30).
      </p>
    ),
  },
  {
    text: (
      <p>
        All believers are entitled to, and should eagerly expect and diligently
        seek, the promise of the Father—the Baptism of the Holy Spirit, as
        commanded by Jesus Christ. This baptism brings empowerment for life and
        service, the granting of spiritual gifts, and their use in the ministry.
        It is a distinct experience from the new birth, though it can happen
        simultaneously with it (Luke 24:49; Acts 1:4-8, 2:38-39, 10:44-46,
        11:14-16, 15:7-9; 1 Corinthians 12:1-31).
      </p>
    ),
  },
  {
    text: (
      <p>
        A believer must be continually filled with the Holy Spirit to have the
        power to witness for Christ, both through actions and words (Eph
        5:15-21).
      </p>
    ),
  },
  {
    text: (
      <p>
        The righteous will be resurrected to live eternally with God (1
        Corinthians 15:51,52; 1 Thessalonians 4:16,17; 2 Thessalonians 2:1).,
        and the unrighteous will be resurrected to be eternally separated from
        God (Revelation 19:20, 20:10-15).
      </p>
    ),
  },
];
export const Statements = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          Detailed statement of faith of the Living Waters International
          Christian Church
        </Heading>
        <ol>
          {STATEMENTS.map(({ text, subtexts = [] }, idx) => (
            <>
              <li className="mb-3" key={idx}>
                {text}
              </li>
              {subtexts.length > 1 && (
                <ol type="a">
                  {subtexts.map((t, i) => (
                    <li className="mb-3" key={i}>
                      {t.text}
                    </li>
                  ))}
                </ol>
              )}
            </>
          ))}
        </ol>
      </Wrapper>
    </>
  );
};
