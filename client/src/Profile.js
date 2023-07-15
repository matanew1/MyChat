import { Divider, Card, Box, Avatar, Stack, Typography } from "@mui/material";

const Profile = ({ username, room }) => {
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        <Stack sx={{ marginLeft: 2 }} spacing={0.5}>
          <Typography fontWeight={700}>{username}</Typography>
          <Typography variant="body2" color="text.secondary">
            Room ID: {room}
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ px: 2, py: 1, bgcolor: "background.default" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          Connected
        </Stack>
      </Box>
    </Card>
  );
};

export default Profile;
