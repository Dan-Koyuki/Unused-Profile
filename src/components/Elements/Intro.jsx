import React from 'react';
import { IntroDesc, IntroImage, StyledIntro } from '../../styles/Intro';

const Intro = () => {
  return (
    <StyledIntro>
    <IntroDesc>
      <h3>Hello there, I'm</h3>
      <h1>Dan Koyuki</h1>
      <span>Aspiring Web Developer</span>
      <h3 className='quote'>"願いが続ける限り、希望を叶う"</h3>
      <span>(As long as you keep wishing, your wishes will come true)</span>
    </IntroDesc>
    <IntroImage>
      {/* Image here */}
      <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36e1d7e5-cfff-4163-ad96-784ae053a32e/dg07wy6-dbc8ced6-cddf-4408-98a2-6f2b98b0d261.png/v1/fill/w_1111,h_719/kamen_rider_tycoon_bujin_sword_form_render_by_neorider217_dg07wy6-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM2IiwicGF0aCI6IlwvZlwvMzZlMWQ3ZTUtY2ZmZi00MTYzLWFkOTYtNzg0YWUwNTNhMzJlXC9kZzA3d3k2LWRiYzhjZWQ2LWNkZGYtNDQwOC05OGEyLTZmMmI5OGIwZDI2MS5wbmciLCJ3aWR0aCI6Ijw9MTEzNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7aZg4W_RAJeJ6mBKdBjLKthvE5UE9ldU1x14AJ_9LkQ'/>
    </IntroImage>
    </StyledIntro>
  );
}
 
export default Intro;