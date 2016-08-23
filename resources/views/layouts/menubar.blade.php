<nav class="navbar navbar-inverse navbar-fixed-top" id="menubar">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand"><span>
				<img src="{{ Auth::user()->getAvatarUrl() }}" height="24" width="24" style="border-radius:25px;" />
				{{ Auth::user()->fullname }}
			</span></a>
		</div>
		<ul class="nav navbar-nav">
			<li class="active"><a href="{{ route('projects.index') }}">
				<span class="glyphicon glyphicon-home"></span><b> iPMS</b><span class="sr-only">(current)</span>
			</a></li>

			<li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-list-alt"></span> Projects <span class="caret"></span></a>
				<ul class="dropdown-menu" style="background:#fffff8">
					<li><a href="/projects">List Project</a></li>
					<li><a href="/projects/0">Show Project</a></li>
					<li><a href="{{ route('projects.create') }}">New Project</a></li>
					<li><a href="">Add Files</a></li>
				</ul>
			</li>
			<li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-calendar"></span> Schedule <span class="caret"></span></a>
				<ul class="dropdown-menu" style="background:#fffff8">
					<li><a href="/schedules/0">Show Schedule</a></li>
					<li><a href="{{ route('schedules.create') }}">Add Schedule</a></li>
				</ul>
			</li>

			<li><a href="#"><span class="glyphicon glyphicon-user"></span> Resource</a></li>
			<li><a href="{{ route('statistics') }}">
				<span class="glyphicon glyphicon-equalizer"></span> Statistics</a></li>
			<li><a href="#"><span class="glyphicon glyphicon-cog"></span> Manage</a></li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			<li><a href="{{ route('auth.logout') }}"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
		</ul>
	</div>
</nav>
<br/>&nbsp
