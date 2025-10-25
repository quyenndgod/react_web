import React from "react";
import { Typography, Card, CardContent, CardMedia, Divider, Link as MuiLink } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString();
}

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  if (!photos || !user) return <Typography>No photos found</Typography>;

  return (
    <div>
      <Typography variant="h5">Photos of {user.first_name} {user.last_name}</Typography>
      {photos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 3 }}>
          <CardMedia component="img" height="400" image={`/images/${photo.file_name}`}  alt={photo._id} />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Created at: {formatDate(photo.date_time)}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1">Comments:</Typography>
            {photo.comments?.length > 0 ? (
              photo.comments.map((comment) => {
                const commenter = models.userModel(comment.user._id);
                return (
                  <div key={comment._id}>
                    <Typography variant="body2">
                      <MuiLink component={Link} to={`/users/${comment.user._id}`}>
                        {commenter.first_name} {commenter.last_name}
                      </MuiLink>{" "}
                      ({formatDate(comment.date_time)}): {comment.comment}
                    </Typography>
                  </div>
                );
              })
            ) : (
              <Typography variant="body2">No comments</Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
