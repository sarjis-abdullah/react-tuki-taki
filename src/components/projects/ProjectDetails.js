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
import { Grid, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
	root: {

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

const RecipeReviewCard = (props) => {
	const classes = useStyles();
	let id = props.props.match.params.id
	let project = useSelector(state => {
		if (state.firestore.data && state.firestore.data.projects) {
			return state.firestore.data.projects[id]
		}
	})
	if (id && project) {
	return (
		<Grid container spacing={3} style={{ justifyContent: 'center' }}>
			<Grid item xs={8}>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe" className={classes.avatar}>
								R
          		</Avatar>
						}
						title={project.title}
						subheader="September 14, 2016"
					/>
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

			</Grid>
		</Grid>
	);
	} else {
		return <p>No Data found</p>
	}
	
}
export default compose(firestoreConnect([
	{
		collection: 'projects'
	}
]))(RecipeReviewCard)
