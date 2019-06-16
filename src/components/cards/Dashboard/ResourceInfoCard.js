import 

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1em;
  .cardTitle {
    font-size: 0.875rem;
    letter-spacing: 0.52px;
    color: ${props => props.theme.colors.grey};
    border-bottom: 1px solid #eff6ff;
    width: 100%;
    min-height: 45px;
    overflow: hidden;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
  .sales-rep-section {
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;

    @media (max-width: 1000px) {
      text-align: center;
    }
    .section {
      display: flex;
      flex-direction: row;
      margin-top: 2em;
      flex-basis: 50%;
      justify-content: space-evenly;
      @media (max-width: 1000px) {
      }
    }
  }
`;