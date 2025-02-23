import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		marginBottom: 10
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function ProjectSummary({ project }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<RouterLink to={'project/' + project.id} style={{ textDecoration: 'none' }}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" className={classes.avatar}>
							R
          </Avatar>
					}
					title={project.title}
					subheader="September 14, 2016"
				/>
			</RouterLink>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{project.body}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
