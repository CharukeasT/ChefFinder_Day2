package com.example.java;
import java.util.*;
import java.sql.*;
abstract class Events{
	public abstract void enterEventDetails(Connection con) throws Exception;
	public abstract void eventMenu(Connection con,String eventName) throws Exception;
	public abstract void addTask(Connection con,String eventName) throws Exception;
	public abstract void addAttende(Connection con,String eventName) throws Exception;
}
class EventDetails extends Events{
	Scanner scan = new Scanner(System.in);
	public void enterEventDetails(Connection con) throws Exception{
		System.out.print("Enter the Event name     : ");
		String eventName = scan.nextLine();
		System.out.print("Enter the Event location : ");
		String eventLocation = scan.nextLine();
		System.out.print("Enter the Event date     : ");
		String eventDate = scan.nextLine();
		System.out.print("Enter the Event time     : ");
		String eventTime = scan.nextLine();
		String insert = "insert into event_details values(?,?,?,?)";
		PreparedStatement st = con.prepareStatement(insert);
		st.setString(1, eventName);
		st.setString(2, eventLocation);
		st.setString(3, eventDate);
		st.setString(4, eventTime);
		st.execute();
		System.out.println();
		System.out.println("Event Details added successfully");
		eventMenu(con,eventName);
	}
	public void eventMenu(Connection con,String eventName) throws Exception{
		while(true) {
			System.out.println();
			System.out.println("********************");
			System.out.println("*    Event Menu    *");
			System.out.println("********************");  
			System.out.println("* 1 . Add task     *");
			System.out.println("* 2 . Add attende  *");
			System.out.println("* 3 . Exit         *");
			System.out.println("********************");  
			System.out.println();
			System.out.print("Enter your choice : ");
			String choice = scan.nextLine();
			System.out.println();
			switch(choice) {
			case "1": addTask(con,eventName);
					  break;
			case "2": addAttende(con,eventName);
					  break;
			case "3": return;
			default : System.out.println();
					  System.out.println("Invalid choice...");
			}
		}
	}
	public void addTask(Connection con,String eventName) throws Exception{
		System.out.print("Enter the Task name : ");
		String taskName = scan.nextLine();
		String insert = "insert into event_task_details(task_name,event_name) values(?,?)";
		PreparedStatement st = con.prepareStatement(insert);
		st.setString(1, taskName);
		st.setString(2, eventName);
		st.execute();
		System.out.println("Task added successfully");
	}
	public void addAttende(Connection con,String eventName) throws Exception{
		try {
			System.out.print("Enter the Attende name : ");
			String attendeName = scan.nextLine();
			String insert = "insert into event_attende_details(event_attende_name,event_name) values(?,?)";
			PreparedStatement st = con.prepareStatement(insert);
			st.setString(1, attendeName);
			st.setString(2, eventName);
			st.execute();
			System.out.println();
			System.out.println("Attende Details added successfully");
		}catch(SQLException E) {
			E.printStackTrace();
		}
	}
}
class Event extends EventDetails{
	Scanner scan = new Scanner(System.in);
	public void mainMenu(Connection con) throws Exception{
		while(true) {
			System.out.println();
			System.out.println("****************************");
			System.out.println("*     Event Management     *");
			System.out.println("****************************");
			System.out.println("* 1 . Add event details    *");
			System.out.println("* 2 . View events          *");
			System.out.println("* 3 . Add attende details  *");
			System.out.println("* 4 . View event details   *");
			System.out.println("* 5 . Edit event details   *");
			System.out.println("* 6 . Delete event details *");
			System.out.println("* 7 . Exit                 *");
			System.out.println("****************************");
			System.out.println();
			System.out.print("Enter your choice : ");
			String choice = scan.nextLine();
			System.out.println();
			switch(choice) {
				case "1": enterEventDetails(con);
						  break;
				case "2": viewEvents(con);
						  break;
				case "3": addAttendeDetails(con);
						  break;
				case "4": System.out.print("Enter the Event name : ");
						  String eventName = scan.nextLine();
						  viewEvents(con,eventName);
						  break;
				case "5": editEvent(con);
						  break;
				case "6": deleteEvent(con);
						  break;
				case "7": System.out.println();
						  System.out.println("Thank You !!!");
					  	  return;
				default : System.out.println();
						  System.out.println("Invalid choice...");
						  break;
			}
		}
	}
	public void viewEvents(Connection con) throws Exception{
		String query = "select * from event_details";
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery(query);
		int i = 0;
		while(rs.next()) {
			if(i++==0) {
				System.out.println("+----------------------+----------------------+------------+------------+");
				System.out.printf("| %-20s | %-20s | %-10s | %-10s |\n","Event Name","Event Location","Event Date","Event Time");
				System.out.println("+----------------------+----------------------+------------+------------+");
			}
			System.out.printf("| %-20s | %-20s | %-10s | %-10s |\n",rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4));
		}
		System.out.println("+----------------------+----------------------+------------+------------+");
		
	}
	public void addAttendee(Connection con) throws Exception{
		System.out.print("Enter Event name   : ");
		String eventName = scan.nextLine();
		String check = "select event_name from event_details where event_name in (select event_name from event_details) and event_name = ?";
		PreparedStatement st3 = con.prepareStatement(check);
		st3.setString(1,eventName);
		ResultSet rs = st3.executeQuery();
		if(!rs.next()) {
			System.out.println();
			System.out.println("No event found with name '" + eventName + "'");
			return;
		}
		System.out.print("Enter Attende name : ");
		String attendeName = scan.nextLine();
		String query = "insert into attende_details(attende_name,event_name) values(?,?)";
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, attendeName);
		st.setString(2, eventName);
		st.execute();
	}
	public void addAttendeDetails(Connection con) throws Exception{
		while(true) {
			System.out.println();
			System.out.println("**************************");
			System.out.println("*  Add Attende details   *");
			System.out.println("**************************");
			System.out.println("* 1 . Add attende detail *");
			System.out.println("* 2 . Exit               *");
			System.out.println("**************************");
			System.out.println();
			System.out.println("Enter your choice : ");
			String choice = scan.nextLine();
			System.out.println();
			switch(choice) {
				case "1": addAttendee(con);
						  break;
				case "2": return;
				default : System.out.println();
						  System.out.println("Invalid choice...");
			}
		}
	}
	public void viewEvents(Connection con,String eventName) throws Exception{
		String query = "select * from event_details where event_name = ?";
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1,eventName);
		ResultSet rs = st.executeQuery();
		while(rs.next()) {
			System.out.println();
			System.out.println("+----------------------------------------------------+");
			System.out.println("|                    Event Details                   |");
			System.out.println("+----------------------------------------------------+");
			System.out.printf("| %-50s |\n",("Event name     : " + rs.getString(1)));
			System.out.printf("| %-50s |\n",("Event location : " + rs.getString(2)));
			System.out.printf("| %-50s |\n",("Event date     : " + rs.getString(3)));
			System.out.printf("| %-50s |\n",("Event time     : " + rs.getString(4)));
			System.out.println("+----------------------------------------------------+");
		}
		
		String tasks = "select task_name from event_task_details where event_name = ?";
		PreparedStatement st3 = con.prepareStatement(tasks);
		st3.setString(1, eventName);
		ResultSet rs3 = st3.executeQuery();
		int i = 0;
		while(rs3.next()) {
			if(i++==0) {
				System.out.println();
				System.out.println("+--------------------+ ");
				System.out.println("|    Task Details    |");
				System.out.println("+--------------------+");
			}
			System.out.printf("| %-18s |\n",rs3.getString(1));
		}
		if(i>0) {
			System.out.println("+--------------------+");
		}
		String attended = "select E.event_attende_name from event_attende_details E inner join attende_details A on A.attende_name = E.event_attende_name where A.event_name = E.event_name and A.event_name = ?";
		PreparedStatement st1 = con.prepareStatement(attended);
		st1.setString(1, eventName);
		ResultSet rs1 = st1.executeQuery();
		i = 0;
		while(rs1.next()) {
			if(i++==0) {
				System.out.println();
				System.out.println("+-------------------+ ");
				System.out.println("|   Attended List   |");
				System.out.println("+-------------------+");
			}
			System.out.printf("| %-17s |\n",rs1.getString(1));
		}
		if(i>0) {
			System.out.println("+-------------------+");
		}
		String not_attended = "select E.event_attende_name from event_attende_details E left join attende_details A on A.attende_name = E.event_attende_name where A.attende_name is null and E.event_name = ?";
		PreparedStatement st2 = con.prepareStatement(not_attended);
		st2.setString(1, eventName);
		ResultSet rs2 = st2.executeQuery();
		i = 0;
		while(rs2.next()) {
			if(i++==0) {
				System.out.println();
				System.out.println("+-------------------+");
				System.out.println("| Not Attended List |");
				System.out.println("+-------------------+");
			}
			System.out.printf("| %-17s |\n",rs2.getString(1));
		}
		if(i>0) {
			System.out.println("+-------------------+");
		}		
		String not_invited = " select A.attende_name from event_attende_details E right join attende_details A on A.attende_name = E.event_attende_name where E.event_attende_name is null and A.event_name = ?;";
		PreparedStatement st4 = con.prepareStatement(not_invited);
		st4.setString(1, eventName);
		ResultSet rs4 = st4.executeQuery();
		i = 0;
		while(rs4.next()) {
			if(i++==0) {
				System.out.println();
				System.out.println("+-----------------------------------+");
				System.out.println("|   Not Invited but attended List   |");
				System.out.println("+-----------------------------------+");
			}
			System.out.printf("| %-33s |\n",rs4.getString(1));
		}
		if(i>0) {
			System.out.println("+-----------------------------------+");
		}		
	}
	public void editEvent(Connection con) throws Exception{
		System.out.print("Enter the Event name     : ");
		String eventName = scan.nextLine();
		String check = "select event_name from event_details where event_name in (select event_name from event_details) and event_name = ?";
		PreparedStatement st1 = con.prepareStatement(check);
		st1.setString(1,eventName);
		ResultSet rs = st1.executeQuery();
		if(!rs.next()) {
			System.out.println();
			System.out.println("No event found with name '" + eventName + "'");
			return;
		}
		System.out.print("Enter the Event location : ");
		String eventLocation = scan.nextLine();
		System.out.print("Enter the Event date     : ");
		String eventDate = scan.nextLine();
		System.out.print("Enter the Event time     : ");
		String eventTime = scan.nextLine();
		String query = "update event_details set event_location = ? , event_date = ? , event_time = ? where event_name = ?";
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, eventLocation);		
		st.setString(2, eventDate);		
		st.setString(3, eventTime);		
		st.setString(4, eventName);
		st.execute();
		System.out.println();
		System.out.println("Event details edited successfully");
	}
	public void deleteEvent(Connection con) throws Exception{
		System.out.print("Enter the Event's name to be deleted : ");
		String eventName = scan.nextLine();
		String check = "select event_name from event_details where event_name in (select event_name from event_details) and event_name = ?";
		PreparedStatement st3 = con.prepareStatement(check);
		st3.setString(1,eventName);
		ResultSet rs = st3.executeQuery();
		if(!rs.next()) {
			System.out.println();
			System.out.println("No event found with name '" + eventName + "'");
			return;
		}
		String query = "delete from event_details where event_name = ?";
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, eventName);
		st.execute();
		String query1 = "delete from event_attende_details where event_name = ?";
		PreparedStatement st1 = con.prepareStatement(query1);
		st1.setString(1, eventName);
		st1.execute();
		String query2 = "delete from event_task_details where event_name = ?";
		PreparedStatement st2 = con.prepareStatement(query2);
		st2.setString(1, eventName);
		st2.execute();
		System.out.println();
		System.out.println("Event details deleted successfully");
	}
}
public class Main extends Event{
	public static void main(String args[]) throws Exception{
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost/console","root","RSaadhi#3");
		Main M = new Main();
		M.mainMenu(con);
	}
}
