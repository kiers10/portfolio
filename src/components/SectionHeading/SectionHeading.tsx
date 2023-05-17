import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  sectionName: string;
}

const SectionHeading = (props: Props) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginBottom: isSmallScreen ? "0rem" : "2.5rem" }}
    >
      <Grid sm={1} display="flex" justifyContent="center" alignItems="center">
        <hr className="heading-before-line" />
      </Grid>
      <Grid xs={12} sm="auto">
        <p className="bt fs-lg bold">
          {`{`} <span className="wt">{props.sectionName}</span> {`}`}
        </p>
      </Grid>
      <Grid sm display="flex" justifyContent="center" alignItems="center">
        <hr className="heading-after-line" />
      </Grid>
    </Grid>
  );
};

export default SectionHeading;
