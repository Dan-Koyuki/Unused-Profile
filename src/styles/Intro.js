import styled from 'styled-components';

export const StyledIntro = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const IntroImage = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 710px;
    height: 100%;
    max-height: 570px;
    padding-top: 0.8rem;
    padding-left: 0.9rem;
    padding-right: 0.3rem;
    margin-left: 3rem;
  }

  @media (max-width: 555px) {
    display: none; /* Hide the image on smaller screens */
  }
`;

export const IntroDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 1rem;

  @media (max-width: 555px) {
    background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36e1d7e5-cfff-4163-ad96-784ae053a32e/dg07wy6-dbc8ced6-cddf-4408-98a2-6f2b98b0d261.png/v1/fill/w_1111,h_719/kamen_rider_tycoon_bujin_sword_form_render_by_neorider217_dg07wy6-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM2IiwicGF0aCI6IlwvZlwvMzZlMWQ3ZTUtY2ZmZi00MTYzLWFkOTYtNzg0YWUwNTNhMzJlXC9kZzA3d3k2LWRiYzhjZWQ2LWNkZGYtNDQwOC05OGEyLTZmMmI5OGIwZDI2MS5wbmciLCJ3aWR0aCI6Ijw9MTEzNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7aZg4W_RAJeJ6mBKdBjLKthvE5UE9ldU1x14AJ_9LkQ'); /* Set your image as a background */
    background-size: contain;
    background-repeat: no-repeat;
    padding: 2rem; /* Add padding to maintain space for content */
    margin-top: 1rem;
    h3{
      margin-left: 15rem;
      margin-bottom: 0.2rem;
      margin-top: 0.5rem;
    }
    .quote{
      margin-top: 3rem;
    }
    h1{
      margin-left: 17rem;
    }
    span{
      margin-left: 15.5rem;
      font-style: italic;
    }
  }
`;
